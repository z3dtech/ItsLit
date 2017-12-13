"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var DataTableCell_1 = require("./DataTableCell");
exports.DataTableRow = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableRow,
    name: 'DataTableRow',
    tag: 'f7-table-row',
    events: [
        'change'
    ],
    instantiatedComponents: [
        DataTableCell_1.DataTableCell
    ]
});

//# sourceMappingURL=DataTableRow.js.map
