'use strict';
var Page1 = Page1 || {};

Page1.controller = function () {
    this.json = "json";
    return {};
};

Page1.backToHome = function () {
    m.route("/");
};

Page1.download = function () {
    m.request({method: "GET", url: "http://localhost:3000/messages"}).then(function (result) {
        Page1.json = JSON.stringify(result);
    });
};

var json = "json";

