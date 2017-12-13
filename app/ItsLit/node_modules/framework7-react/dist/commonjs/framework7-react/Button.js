"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var Icon_1 = require("./Icon");
var framework7_vue_2 = require("../framework7-vue/framework7-vue");
exports.Button = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueButton,
    name: 'Button',
    tag: 'f7-button',
    events: [
        'click'
    ],
    instantiatedComponents: [
        Icon_1.Icon
    ],
    mixin: framework7_vue_2.VueLinkMixin
});

//# sourceMappingURL=Button.js.map
