"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var NavLeft_1 = require("./NavLeft");
var NavCenter_1 = require("./NavCenter");
exports.Navbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueNavbar,
    name: 'Navbar',
    tag: 'f7-navbar',
    events: [
        'navbar:beforeinit',
        'navbar:init',
        'navbar:reinit',
        'navbar:beforeremove',
        'back-click',
        'click:back'
    ],
    instantiatedComponents: [
        NavLeft_1.NavLeft,
        NavCenter_1.NavCenter
    ],
    slots: [
        'before-inner',
        'after-inner'
    ]
});

//# sourceMappingURL=Navbar.js.map
