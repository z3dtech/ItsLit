"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var FormSwitch_1 = require("./FormSwitch");
var FormRange_1 = require("./FormRange");
exports.FormInput = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFormInput,
    name: 'FormInput',
    tag: 'f7-input',
    events: [
        'input',
        'focus',
        'blur',
        'change',
        'click',
        'keypress',
        'keyup',
        'keydown',
        'beforeinput',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'focusin',
        'focusout',
        'dblclick',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'wheel',
        'select'
    ],
    instantiatedComponents: [
        FormSwitch_1.FormSwitch,
        FormRange_1.FormRange
    ]
});

//# sourceMappingURL=FormInput.js.map
