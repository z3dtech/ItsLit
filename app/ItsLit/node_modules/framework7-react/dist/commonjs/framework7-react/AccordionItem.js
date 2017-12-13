"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.AccordionItem = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueAccordionItem,
    name: 'AccordionItem',
    tag: 'f7-accordion-item',
    events: [
        'accordion:open',
        'accordion:opened',
        'accordion:close',
        'accordion:closed'
    ]
});

//# sourceMappingURL=AccordionItem.js.map
