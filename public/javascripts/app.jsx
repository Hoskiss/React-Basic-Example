/** @jsx React.DOM */
var app = app || {};
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Input = ReactBootstrap.Input;

(function () {
    'use strict';
    var ENTER_KEY = 13;

    var NavBar = React.createClass({
        render: function() {
            return (
                <div className="nav-bar">
                    <ButtonGroup className="col-md-12">
                        <Button bsStyle="primary" className="col-md-3" onClick={this.props.handleTodoClick}>
                            Todo List
                        </Button>
                        <Button bsStyle="primary" className="col-md-3">Services</Button>
                        <Button bsStyle="primary" className="col-md-3">About</Button>
                        <Button bsStyle="primary" className="col-md-3">Contact us</Button>
                    </ButtonGroup>
                </div>
            );
        }
    });

    var MyReactApp = React.createClass({
        getInitialState: function() {
            return {
                todo_title: undefined
            };
        },

        handleNavTodoClick: function() {
            this.setState({
                todo_title: (
                <div className="todo-list col-md-5 col-centered">
                    <Input
                        type="text"
                        label="Create your todo list"
                        placeholder="What needs to be done?" />
                </div> )
            });

        },

        handleOthersClick: function() {
            return
        },

        render: function() {
            return (
                <div>
                    <NavBar handleTodoClick={this.handleNavTodoClick} />

                    <div className="main-content">
                        {this.state.todo_title}
                    </div>
                </div>
            );
        }

    });

    function render() {
        React.render(
            <MyReactApp />,
            document.body
        );
    }

    render();
})();



