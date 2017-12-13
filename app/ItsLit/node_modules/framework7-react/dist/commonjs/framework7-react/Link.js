"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var Badge_1 = require("./Badge");
var Icon_1 = require("./Icon");
var framework7_vue_2 = require("../framework7-vue/framework7-vue");
exports.Link = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueLink,
    name: 'Link',
    tag: 'f7-link',
    events: [
        'click'
    ],
    instantiatedComponents: [
        Badge_1.Badge,
        Icon_1.Icon
    ],
    mixin: framework7_vue_2.VueLinkMixin
});

//# sourceMappingURL=Link.js.map
