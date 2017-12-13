"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.Toolbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueToolbar,
    name: 'Toolbar',
    tag: 'f7-toolbar',
    slots: [
        'before-inner',
        'after-inner'
    ]
});

//# sourceMappingURL=Toolbar.js.map
