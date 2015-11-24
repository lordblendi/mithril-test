'use strict';
var Page2 = Page2 || {};

Page2.controller = function () {
    this.name = "name";
    return {};
};

Page2.backToHome = function () {
    m.route("/");
};


Page2.downloadJSON = function () {
    m.request({method: "GET", url: "http://localhost:3000/messages"}).then(function (result) {
        Page2.name = result.name;
    });
};