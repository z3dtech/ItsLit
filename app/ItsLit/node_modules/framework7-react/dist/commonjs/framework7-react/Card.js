"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
var CardHeader_1 = require("./CardHeader");
var CardFooter_1 = require("./CardFooter");
var CardContent_1 = require("./CardContent");
exports.Card = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueCard,
    name: 'Card',
    tag: 'f7-card',
    instantiatedComponents: [
        CardHeader_1.CardHeader,
        CardFooter_1.CardFooter,
        CardContent_1.CardContent
    ]
});

//# sourceMappingURL=Card.js.map
