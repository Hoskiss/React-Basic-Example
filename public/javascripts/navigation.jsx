/** @jsx React.DOM */
var app = app || {};
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;

(function () {
    'use strict';

    app.TodoList = React.createClass({
        render: function() {
            return (
                <div className="todo-list">
                    <input placeholder="hehe"></input>
                </div>
            );
        }
    });

    app.NavBar = React.createClass({

        handleTodoClick: function() {
            console.log("hehfal");
            var todoList = app.TodoList;
            React.renderComponent(
                <todoList />,
                document.getElementsByClassName('main-content')
            );
        },

        handleOthersClick: function() {
            return
        },



        render: function() {
            return (
                <div>
                    <div className="nav-bar">
                        <ButtonGroup className="col-md-12">
                            <Button bsStyle="primary" className="col-md-3" onClick={this.handleTodoClick}>
                                Todo List
                            </Button>
                            <Button bsStyle="primary" className="col-md-3">Services</Button>
                            <Button bsStyle="primary" className="col-md-3">About</Button>
                            <Button bsStyle="primary" className="col-md-3">Contact us</Button>
                        </ButtonGroup>
                    </div>

                    <div className="main-content">
                    </div>
                </div>
            );
        }
    });







})();

