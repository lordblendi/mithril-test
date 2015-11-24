'use strict';
var MyComponent = MyComponent || {};

MyComponent.view = function () {
    return m("div", [m("button", {
        onclick: function () {
            MyComponent.reroute("page1")
        }
    }, "Page 1 - Get json from AJAX"),
        m("button", {
            onclick: function () {
                MyComponent.reroute("page2")
            }
        }, "Page2 - Get json element from AJAX")]);
};


