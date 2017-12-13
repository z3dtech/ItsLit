"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.PageContent = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePageContent,
    name: 'PageContent',
    tag: 'f7-page-content',
    events: [
        'tab:show',
        'tab:hide'
    ]
});

//# sourceMappingURL=PageContent.js.map
