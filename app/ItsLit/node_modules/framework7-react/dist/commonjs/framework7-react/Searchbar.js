"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.Searchbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueSearchbar,
    name: 'Searchbar',
    tag: 'f7-searchbar',
    events: [
        'change',
        'input',
        'focus',
        'blur',
        'submit',
        'searchbar:search',
        'searchbar:clear',
        'searchbar:enable',
        'searchbar:disable',
        'click:clear',
        'click:cancel'
    ],
    slots: [
        'before-input',
        'after-input'
    ]
});

//# sourceMappingURL=Searchbar.js.map
