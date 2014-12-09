/** @jsx React.DOM */
var app = app || {};
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;

(function () {
    'use strict';

    app.NavBar = React.createClass({
        render: function() {
            // TODO: remove hard-code, we know there're four elems
            return (
                <div>
                    <ButtonGroup className="col-md-12">
                        <Button bsStyle="primary" className="col-md-3">Todo List</Button>
                        <Button bsStyle="primary" className="col-md-3">Services</Button>
                        <Button bsStyle="primary" className="col-md-3">About</Button>
                        <Button bsStyle="primary" className="col-md-3">Contact us</Button>
                    </ButtonGroup>
                </div>
            );
        }
    });
})();

