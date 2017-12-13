"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var DataTableTitle_1 = require("./DataTableTitle");
exports.DataTableHeader = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableHeader,
    name: 'DataTableHeader',
    tag: 'f7-table-header',
    instantiatedComponents: [
        DataTableTitle_1.DataTableTitle
    ]
});

//# sourceMappingURL=DataTableHeader.js.map
