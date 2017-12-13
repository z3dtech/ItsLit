"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.FormRange = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFormRange,
    name: 'FormRange',
    tag: 'f7-range',
    events: [
        'input',
        'change',
        'click'
    ]
});

//# sourceMappingURL=FormRange.js.map
