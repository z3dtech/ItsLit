"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.Popup = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePopup,
    name: 'Popup',
    tag: 'f7-popup',
    events: [
        'popup:open',
        'popup:opened',
        'popup:close',
        'popup:closed'
    ]
});

//# sourceMappingURL=Popup.js.map
