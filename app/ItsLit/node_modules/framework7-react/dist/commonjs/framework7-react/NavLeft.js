"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var Link_1 = require("./Link");
exports.NavLeft = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueNavLeft,
    name: 'NavLeft',
    tag: 'f7-nav-left',
    events: [
        'back-click',
        'click:back'
    ],
    instantiatedComponents: [
        Link_1.Link
    ]
});

//# sourceMappingURL=NavLeft.js.map
