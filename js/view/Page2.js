'use strict';
var Page2 = Page2 || {};

Page2.view = function () {
    return m("div", [m("button", {
        onclick: function () {
            m.request({method: "GET", url: "http://localhost:3000/messages"}).then(function (result) {
                Page2.name = result.name;
            });
        }
    }, "Get name"),
        m("div", Page2.name),
        m("button", {
            onclick: function () {
                m.route("/");
            }
        }, "Back to home")]);
};

