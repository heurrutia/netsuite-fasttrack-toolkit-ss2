/**
 * This module provides a lazy, functional processing approach to working with NetSuite saved searches.
 * It automatically handles paging behind the scenes allowing the developer to focus on 'per result' business logic.
 *
 * Use `LazySearch.from()` and `LazySearch.load()` to get started.
 * Turn search results into plain objects using `nsSearchResult2obj()` and leverage
 * the methods of [ImmutableJS](https://facebook.github.io/immutable-js/) to process search results.
 * @module
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/query", "./EC_Logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LazyQuery = exports.nsQueryResult2obj = void 0;
    const query = require("N/query");
    const LogManager = require("./EC_Logger");
    /**
     * Rudimentary conversion of a NS search result to a simple flat plain javascript object. Suitable as an argument to `map()`
     * @param useLabels set to false to ignore search column labels, using the column name (internalid) instead.
     * Defaults to true which means the property names on the returned object will match the column label names if set.
     * If useLabels = true and no label exists, falls back to using column name. Note that label strings should be valid
     * characters for property names (e.g. contain no ':', '-', '>' etc.)
     * @param addGetTextProps if true, for each column which has a _truthy_ getText() value, include that as a 'propnameText' field similar to how nsdal behaves
     * @returns a mapping function taking a NetSuite search result and returns a POJO representation of that search result.
     * The return type will always have an 'id' property merged with type T if provided.
     *
     * @typeparam T declares the shape of the plain objects returned. e.g. `nsSearchResult2obj<{ companyname, memo }>` for a search result
     * that has columns _companyname_ and _memo_. Including an optional type here ensures strong typing on followup chained
     * method calls.
     *
     * @example  (using Immutable JS Sequence)
     *
     * ```typescript
     *
     *  Seq(LazyQuery.from('string').map(nsSearchResult2obj()).forEach(...)
     *
     *  ```1
     */
    function nsQueryResult2obj(r) {
        return r.asMap();
    }
    exports.nsQueryResult2obj = nsQueryResult2obj;
    /**
     *
     * Makes a NetSuite search an ES2015 style Iterator. That is, it follows the Iterator Protocol for iterating
     * over search results in a forward-only fashion. The result can be passed to any library
     * that accepts Iterators (such as ImmutableJS)
     * to provide easy chainable logic on arbitrary length search result sets.
     *
     * Started with this as a class due to other library requirements and left it as a class just as an easy
     * way to contain state about currentpage and index into that page.
     *
     * This is exposed as an iterator so that it could be used with other libraries. For example
     * I've heard Ramda may support iterators so if we choose to go a more pure FP route down the
     * road this class would be useful - i.e. it remains untied to any particular library.
     *
     * @example take the first result of a search as a plain object (ImmutableJS)
     * ```typescript
     * import {Seq} from './NFT-X.Y.Z/immutable'
     * const oneResult = Seq(LazySearch.load('1234')).map(nsSearchResult2obj()).take(1)
     * ```
     */
    class LazyQuery {
        /**
         * Not meant to be used directly, use factory methods such as `load` or `from`
         * @param q
         * @param pageSize optional pagesize, can be up to 1000
         */
        constructor(q, pageSize = 500) {
            this.q = q;
            this.pageSize = pageSize;
            if (pageSize > 1000)
                throw new Error('page size must be <= 1000');
            this.log = LogManager.getLogger(LazyQuery.LOGNAME);
            this.log.debug('Query Object', q);
            this.log.debug('q.query', q.query);
            if (!q.params)
                this.pagedData = query.runSuiteQLPaged({ query: q.query, pageSize: pageSize });
            else
                this.pagedData = query.runSuiteQLPaged({ query: q.query, params: q.params, pageSize: pageSize });
            this.iterator = this.pagedData.iterator();
            this.log.debug('this.iterator', this.iterator);
            // only load a page if we have record
            if (this.pagedData.count > 0) {
                this.currentPage = this.pagedData.fetch(0);
                this.pagedData.pageRanges[0].index;
                this.currentData = this.currentPage.data.results;
                this.log.debug('this.currentData', this.currentData);
            }
            else {
                this.currentData = [];
                this.log.debug('runPaged() search return zero results');
            }
            this.index = 0;
            this.log.info(`lazy query `, `using page size ${this.pagedData.pageSize}, record count ${this.pagedData.count}`);
        }
        /**
         * Creates a lazy search from an existing NS search.
         * @param q
         * @param pageSize
         * @returns {LazySearch}
         *
         * @example create a search and begin lazy processing of results
         *
         * ```
         * import {Seq} from './NFT-X.Y.Z/immutable'
         * import * as search from 'N/search
         * import {governanceRemains, LazySearch, nsSearchResult2obj} from './NFT-X.Y.Z/search'
         *
         * Seq(LazySearch.from(search.create({
         *    filters: [['internalid', 'anyof', [1,2]),
         *    columns:['item', 'description'],
         *    type: search.Type.ITEM,
         *  })))
         *   .takeWhile(governanceRemains()) // process until we drop below default governance threshold
         *   .map(nsSearchResult2obj()) // convert search results to plain objects with properties
         *   .forEach( r => log.debug(r))
         * ```
         */
        static from(q, pageSize) {
            return new LazyQuery(q, pageSize);
            // query.runSuiteQLPaged({ query: sql, params: params, pageSize: pageSize })
        }
        /**
         * LazySearch is both an iterable and an iterator for search results.
         */
        [Symbol.iterator]() {
            return this;
        }
        /**
         * per the iterator protocol, retrieves the next element. Also returns `null` if done as the specification for
         * the protocol says the value property is optional when 'done'
         *
         * You don't typically call this function yourself - libraries like ImmutableJS do.
         */
        next() {
            const atEndOfPage = this.index === this.currentData.length;
            const done = !this.currentPage || (this.currentPage.isLast && atEndOfPage);
            if (done)
                return {
                    done: true,
                    value: null
                };
            // we've reached the end of the current page, read the next page (overwriting current) and start from its beginning
            if (atEndOfPage) {
                this.log.debug('this.currentPage', this.currentPage);
                this.currentPage = this.pagedData.fetch(this.currentPage.pageRange.index + 1);
                this.log.debug('this.currentPage post increment', this.currentPage);
                this.currentData = this.currentPage.data.results;
                this.mappedData = this.currentPage.data.asMappedResults();
                this.log.debug('loaded next page', `is last page: ${this.currentPage.isLast}`);
                this.index = 0;
            }
            // return the next result from existing page (which may have been loaded immediately prior above)
            return {
                done: false,
                value: this.currentData[this.index++]
            };
        }
    }
    exports.LazyQuery = LazyQuery;
    /**
     * the name of the custom logger for this component for independent logging control
     */
    LazyQuery.LOGNAME = 'lazy';
});
