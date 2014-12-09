/** @jsx React.DOM */
var app = app || {};

(function () {
    'use strict';

    function render() {
        React.render(
            <app.NavBar />,
            document.body
        );
    }

    render();
})();

