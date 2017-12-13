"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.Actions = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueActions,
    name: 'Actions',
    tag: 'f7-actions',
    events: [
        'actions:open',
        'actions:opened',
        'actions:close',
        'actions:closed'
    ]
});

//# sourceMappingURL=Actions.js.map
