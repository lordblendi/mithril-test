'use strict';

var Page1 = Page1 || {};
var Page2 = Page2 || {};
var MyComponent = MyComponent || {};

//set routing to hash mode
m.route.mode = 'hash';

//set routing lists with components
m.route(document.getElementById('mainpage'), '/', {
    '/': MyComponent,
    '/page1': Page1,
    '/page2': Page2,
});

m.route("/");
