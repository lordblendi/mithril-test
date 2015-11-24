'use strict';
var Page1 = Page1 || {};

Page1.view = function () {
    return m("div", [m("button", {
        onclick: PAge1.download
    }, "Get json"),
        m("div", Page1.json),
        m("button", {
            onclick: Page1.backToHome
        }, "Back to home")]);
};


