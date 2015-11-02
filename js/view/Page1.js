'use strict';
var Page1 = Page1 || {};

Page1.view = function () {
    return m("div", [m("button", {
        onclick: function () {
            m.request({method: "GET", url: "http://localhost:3000/messages"}).then(function (result) {
                Page1.json = JSON.stringify(result);
            });
        }
    }, "Get json"),
        m("div", Page1.json),
        m("button", {
            onclick: function () {
                m.route("/");
            }
        }, "Back to home")]);
};


