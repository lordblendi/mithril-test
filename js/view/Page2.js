'use strict';
var Page2 = Page2 || {};

Page2.view = function () {
    return m("div", [m("button", {
        onclick: Page2.downloadJSON
    }, "Get name"),
        m("div", Page2.name),
        m("button", {
            onclick: Page2.backToHome
        }, "Back to home")]);
};

