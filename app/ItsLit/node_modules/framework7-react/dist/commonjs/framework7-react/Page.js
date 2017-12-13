"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.Page = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePage,
    name: 'Page',
    tag: 'f7-page',
    events: [
        'ptr:pullstart',
        'ptr:pullmove',
        'ptr:pullend',
        'ptr:refresh',
        'ptr:done',
        'infinite',
        'page:beforeinit',
        'page:init',
        'page:reinit',
        'page:beforeanimation',
        'page:afteranimation',
        'page:beforeremove',
        'page:back',
        'page:afterback'
    ],
    slots: [
        'static',
        'fixed'
    ]
});

//# sourceMappingURL=Page.js.map
