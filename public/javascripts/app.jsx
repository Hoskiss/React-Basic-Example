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

    var TodoTitle = React.createClass({
        handleKeyDown: function(event) {
            if(event.which !== ENTER_KEY) {
                return;
            }
            event.preventDefault();

            var todo = this.refs.todoTitle.getValue();
            if (!todo) {
              return;
            }
            this.props.handleKeyDown({todo: todo});
            this.refs.todoTitle.getInputDOMNode().value = '';
            return;
        },

        render: function() {
            return (
                <div className="todo-list col-md-5 col-centered">
                    <Input
                        ref="todoTitle"
                        type="text"
                        label="Create your todo list"
                        placeholder="What needs to be done?"
                        onKeyDown={this.handleKeyDown} />
                </div>
            );
        }
    });

    var MyReactApp = React.createClass({
        getInitialState: function() {
            return {
                todo_list: [],
                todo_title: undefined,
                todo_items: undefined
            };
        },

        handleNavTodoClick: function() {
            this.setState({
                todo_title: <TodoTitle handleKeyDown={this.handleTodoTitleKeyDown} />
            });
        },

        handleTodoTitleKeyDown: function (todo) {

            var new_todo_list = this.state.todo_list;
            new_todo_list.push(todo);
            this.setState({todo_list: new_todo_list});
            console.log(this.state.todo_list);
            //var val_1 = this.refs.todoTitle.getDOMNode().value.trim();
            //var val_2 = this.state.refs.todoTitle.getDOMNode().value.trim();

            //console.log(val_1);
            //console.log(val_2);
            // if (val) {
            //     this.props.model.addTodo(val);
            //     this.refs.newField.getDOMNode().value = '';
            // }
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
                        {this.state.todo_items}
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



