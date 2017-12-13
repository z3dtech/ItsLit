"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var Link_1 = require("./Link");
exports.Messagebar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueMessagebar,
    name: 'Messagebar',
    tag: 'f7-messagebar',
    events: [
        'change',
        'input',
        'focus',
        'blur',
        'submit',
        'click'
    ],
    instantiatedComponents: [
        Link_1.Link
    ],
    slots: [
        'before-inner',
        'before-textarea',
        'after-textarea',
        'after-inner'
    ]
});

//# sourceMappingURL=Messagebar.js.map
