"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = require("../src/utils/ReactifyF7Vue");
var framework7_vue_1 = require("../framework7-vue/framework7-vue");
exports.LoginScreen = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueLoginScreen,
    name: 'LoginScreen',
    tag: 'f7-login-screen',
    events: [
        'loginscreen:open',
        'loginscreen:opened',
        'loginscreen:close',
        'loginscreen:closed'
    ]
});

//# sourceMappingURL=LoginScreen.js.map
