"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.DataTableCell = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableCell,
    name: 'DataTableCell',
    tag: 'f7-table-cell',
    events: [
        'click'
    ]
});

//# sourceMappingURL=DataTableCell.js.map
