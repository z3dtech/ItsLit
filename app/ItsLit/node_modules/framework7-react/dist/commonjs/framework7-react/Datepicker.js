"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var framework7_vue_2 = require("../framework7-vue/framework7-vue");
exports.Datepicker = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDatepicker,
    name: 'Datepicker',
    tag: 'undefined',
    events: [
        'change',
        'monthAdd',
        'dayClick',
        'monthYearChangeStart',
        'monthYearChangeEnd',
        'open',
        'close'
    ],
    mixin: framework7_vue_2.VueCalendarDatePickerMixin
});

//# sourceMappingURL=Datepicker.js.map
