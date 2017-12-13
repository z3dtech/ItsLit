"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var framework7_vue_2 = require("../framework7-vue/framework7-vue");
exports.Calendar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueCalendar,
    name: 'Calendar',
    tag: 'f7-calendar',
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

//# sourceMappingURL=Calendar.js.map
