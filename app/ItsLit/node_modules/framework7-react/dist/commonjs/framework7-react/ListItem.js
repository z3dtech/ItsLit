"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var ListItemContent_1 = require("./ListItemContent");
exports.ListItem = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueListItem,
    name: 'ListItem',
    tag: 'f7-list-item',
    events: [
        'click',
        'swipeout:deleted',
        'swipeout:delete',
        'swipeout:close',
        'swipeout:closed',
        'swipeout:open',
        'swipeout:opened',
        'swipeout',
        'accordion:close',
        'accordion:closed',
        'accordion:open',
        'accordion:opened',
        'input',
        'change'
    ],
    instantiatedComponents: [
        ListItemContent_1.ListItemContent
    ],
    slots: [
        'content-start',
        'media-start',
        'inner-start',
        'after-start',
        'root-start',
        'content',
        'media',
        'inner',
        'after',
        'root'
    ]
});

//# sourceMappingURL=ListItem.js.map
