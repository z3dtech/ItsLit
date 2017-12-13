"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.List = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueList,
    name: 'List',
    tag: 'f7-list',
    events: [
        'sortable:open',
        'sortable:close',
        'sortable:sort',
        'tab:show',
        'tab:hide',
        'virtual:itembeforeinsert',
        'virtual:beforeclear',
        'virtual:itemsbeforeinsert',
        'virtual:itemsafterinsert'
    ]
});

//# sourceMappingURL=List.js.map
