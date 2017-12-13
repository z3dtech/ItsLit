"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.Message = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueMessage,
    name: 'Message',
    tag: 'f7-message',
    events: [
        'click',
        'click:name',
        'click:text',
        'click:avatar'
    ],
    slots: [
        'start',
        'end'
    ]
});

//# sourceMappingURL=Message.js.map
