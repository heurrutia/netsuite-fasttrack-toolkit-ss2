var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/record", "./Record", "./Sublist", "./InventoryDetailBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AssemblyBuildBase = exports.ComponentSublist = void 0;
    const record = require("N/record");
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const InventoryDetailBase_1 = require("./InventoryDetailBase");
    /**
     * the Components (component) sublist on AssemblyBuild records
     */
    class ComponentSublist extends Sublist_1.SublistLine {
    }
    exports.ComponentSublist = ComponentSublist;
    __decorate([
        Sublist_1.SublistFieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
    ], ComponentSublist.prototype, "componentinventorydetail", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], ComponentSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], ComponentSublist.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ComponentSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ComponentSublist.prototype, "quantityonhand", void 0);
    __decorate([
        Sublist_1.SublistFieldType.float
    ], ComponentSublist.prototype, "unitcost", void 0);
    /**
     * NetSuite Assembly Build (assemblybuild) transaction type.
     * Note it does not inherit from our transaction base because it has a differing subset of fields documented in the
     * records browser
     */
    class AssemblyBuildBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.ASSEMBLY_BUILD; }
    }
    exports.AssemblyBuildBase = AssemblyBuildBase;
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "billofmaterials", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "billofmaterialsrevision", void 0);
    __decorate([
        Record_1.FieldType.float
    ], AssemblyBuildBase.prototype, "buildable", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "class", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], AssemblyBuildBase.prototype, "createddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "department", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AssemblyBuildBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "item", void 0);
    __decorate([
        Record_1.FieldType.subrecord(InventoryDetailBase_1.InventoryDetailBase)
    ], AssemblyBuildBase.prototype, "inventorydetail", void 0);
    __decorate([
        Record_1.FieldType.datetime
    ], AssemblyBuildBase.prototype, "lastmodifieddate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "location", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AssemblyBuildBase.prototype, "memo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "postingperiod", void 0);
    __decorate([
        Record_1.FieldType.float
    ], AssemblyBuildBase.prototype, "quantity", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "revision", void 0);
    __decorate([
        Record_1.FieldType.textarea
    ], AssemblyBuildBase.prototype, "revisionmemo", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.date
    ], AssemblyBuildBase.prototype, "trandate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], AssemblyBuildBase.prototype, "tranid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], AssemblyBuildBase.prototype, "units", void 0);
    __decorate([
        Record_1.FieldType.sublist(ComponentSublist)
    ], AssemblyBuildBase.prototype, "component", void 0);
});
