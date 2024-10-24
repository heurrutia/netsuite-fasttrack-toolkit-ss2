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
        define(["require", "exports", "./Record", "./Sublist", "N/record"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionBase = exports.SubscriptionLineSublist = exports.SublineFromPlanSublist = exports.PriceBookLinesSublist = void 0;
    const Record_1 = require("./Record");
    const Sublist_1 = require("./Sublist");
    const record = require("N/record");
    /**
     * priceinterval - Price Book Lines
     * NOTE: This sublist cannot have lines added/removed, so addLine(), removeLine() and removeAllLines() will not work.
     *      Only a small number of fields are able to be edited on this sublist.
     */
    class PriceBookLinesSublist extends Sublist_1.SublistLine {
    }
    exports.PriceBookLinesSublist = PriceBookLinesSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceBookLinesSublist.prototype, "catalogtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceBookLinesSublist.prototype, "chargetype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], PriceBookLinesSublist.prototype, "discount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceBookLinesSublist.prototype, "frequency", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], PriceBookLinesSublist.prototype, "includedquantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceBookLinesSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PriceBookLinesSublist.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceBookLinesSublist.prototype, "multiplierline", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], PriceBookLinesSublist.prototype, "priceplan", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceBookLinesSublist.prototype, "prorateby", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], PriceBookLinesSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.currency
    ], PriceBookLinesSublist.prototype, "recurringamount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceBookLinesSublist.prototype, "repeatevery", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], PriceBookLinesSublist.prototype, "startdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], PriceBookLinesSublist.prototype, "startoffsetunit", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PriceBookLinesSublist.prototype, "startoffsetvalue", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], PriceBookLinesSublist.prototype, "status", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], PriceBookLinesSublist.prototype, "subscriptionplanline", void 0);
    /**
     * sublinefromplan - Lines
     */
    class SublineFromPlanSublist extends Sublist_1.SublistLine {
    }
    exports.SublineFromPlanSublist = SublineFromPlanSublist;
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], SublineFromPlanSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], SublineFromPlanSublist.prototype, "revrecoption", void 0);
    /**
     * subscriptionline - Lines (Sublist)
     * NOTE: The following fields can't be updated due to NetSuite throwing errors even if the same value is set:
     *      catalogtype, discount, enddate, quantity, recurrencestartdate, startdate, subscription, subscriptionline,
     *      terminationdate.
     *      removeAllLines() will not work on update.
     */
    class SubscriptionLineSublist extends Sublist_1.SublistLine {
    }
    exports.SubscriptionLineSublist = SubscriptionLineSublist;
    __decorate([
        Sublist_1.SublistFieldType.select
    ], SubscriptionLineSublist.prototype, "billingmode", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], SubscriptionLineSublist.prototype, "catalogtype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.percent
    ], SubscriptionLineSublist.prototype, "discount", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], SubscriptionLineSublist.prototype, "enddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], SubscriptionLineSublist.prototype, "includeinrenewal", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], SubscriptionLineSublist.prototype, "isincluded", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], SubscriptionLineSublist.prototype, "item", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], SubscriptionLineSublist.prototype, "linenumber", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], SubscriptionLineSublist.prototype, "prorateenddate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.checkbox
    ], SubscriptionLineSublist.prototype, "proratestartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.decimalnumber
    ], SubscriptionLineSublist.prototype, "quantity", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], SubscriptionLineSublist.prototype, "recurrencestartdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.freeformtext
    ], SubscriptionLineSublist.prototype, "revrecoption", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], SubscriptionLineSublist.prototype, "startdate", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], SubscriptionLineSublist.prototype, "status", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], SubscriptionLineSublist.prototype, "subscription", void 0);
    __decorate([
        Sublist_1.SublistFieldType.integernumber
    ], SubscriptionLineSublist.prototype, "subscriptionline", void 0);
    __decorate([
        Sublist_1.SublistFieldType.select
    ], SubscriptionLineSublist.prototype, "subscriptionlinetype", void 0);
    __decorate([
        Sublist_1.SublistFieldType.date
    ], SubscriptionLineSublist.prototype, "terminationdate", void 0);
    /**
     * NetSuite Subscription record type
     */
    class SubscriptionBase extends Record_1.NetsuiteRecord {
        static recordType() { return record.Type.SUBSCRIPTION; }
    }
    exports.SubscriptionBase = SubscriptionBase;
    __decorate([
        Record_1.FieldType.integernumber
    ], SubscriptionBase.prototype, "advancerenewalperiodnumber", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "advancerenewalperiodunit", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SubscriptionBase.prototype, "autoname", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SubscriptionBase.prototype, "autorenewal", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "billingaccount", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionBase.prototype, "billingaccountstartdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "billingschedule", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "billingsubscriptionstatus", void 0);
    __decorate([
        Record_1.FieldType.currency
    ], SubscriptionBase.prototype, "currency", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "customer", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "customform", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "defaultrenewalmethod", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "defaultrenewalplan", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "defaultrenewalpricebook", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "defaultrenewalterm", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "defaultrenewaltrantype", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionBase.prototype, "enddate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionBase.prototype, "estimatedrevrecenddate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionBase.prototype, "externalid", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "frequency", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionBase.prototype, "idnumber", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "initialterm", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], SubscriptionBase.prototype, "initialtermduration", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "initialtermtype", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "initialtermunits", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], SubscriptionBase.prototype, "internalid", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionBase.prototype, "lastbillcycledate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionBase.prototype, "lastbilldate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionBase.prototype, "name", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionBase.prototype, "nextbillcycledate", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionBase.prototype, "nextrenewalstartdate", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionBase.prototype, "otherrecordnumber", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "pricebook", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], SubscriptionBase.prototype, "renewalnumber", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "salesorder", void 0);
    __decorate([
        Record_1.FieldType.date
    ], SubscriptionBase.prototype, "startdate", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "subscriptionplan", void 0);
    __decorate([
        Record_1.FieldType.freeformtext
    ], SubscriptionBase.prototype, "subscriptionplanname", void 0);
    __decorate([
        Record_1.FieldType.integernumber
    ], SubscriptionBase.prototype, "subscriptionrevision", void 0);
    __decorate([
        Record_1.FieldType.checkbox
    ], SubscriptionBase.prototype, "templatestored", void 0);
    __decorate([
        Record_1.FieldType.select
    ], SubscriptionBase.prototype, "subsidiary", void 0);
    __decorate([
        Record_1.FieldType.sublist(PriceBookLinesSublist)
    ], SubscriptionBase.prototype, "priceinterval", void 0);
    __decorate([
        Record_1.FieldType.sublist(SublineFromPlanSublist)
    ], SubscriptionBase.prototype, "sublinefromplan", void 0);
    __decorate([
        Record_1.FieldType.sublist(SubscriptionLineSublist)
    ], SubscriptionBase.prototype, "subscriptionline", void 0);
});
