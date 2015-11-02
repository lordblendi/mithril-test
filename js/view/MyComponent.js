'use strict';
var MyComponent = MyComponent || {};

MyComponent.view = function () {
    return m("div", [m("button", {
        onclick: function () {
            m.route("/page1");
        }
    }, "Page 1 - Get json from AJAX"),
        m("button", {
            onclick: function () {
                m.route("/page2");
            }
        }, "Page2 - Get json element from AJAX")]);
};


