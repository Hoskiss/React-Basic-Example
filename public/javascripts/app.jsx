/** @jsx React.DOM */
var app = app || {};
var Button = ReactBootstrap.Button;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Input = ReactBootstrap.Input;
var Well = ReactBootstrap.Well;

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

    var TodoItems = React.createClass({
        render: function() {
            return (
                <div className="todo-items col-md-6 col-centered">
                    {this.props.todoList.map(
                        function(item) {
                            return (<Well >{item.todo}</Well>);
                        }
                    )}
                </div>
            );
        }
    });

    var MyReactApp = React.createClass({
        getInitialState: function() {
            return {
                todoList: [],
                todoTitle: undefined,
                todoItems: undefined
            };
        },

        handleNavTodoClick: function() {
            this.setState({
                todoTitle: <TodoTitle handleKeyDown={this.handleTodoTitleKeyDown} />
            });
        },

        handleTodoTitleKeyDown: function (todo) {
            var newTodoList = this.state.todoList;
            newTodoList.push(todo);
            this.setState({todoList: newTodoList});
            //console.log(this.state.todoList);

            this.setState({
                todoItems: <TodoItems todoList={this.state.todoList} />
            });

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
                        {this.state.todoTitle}
                        {this.state.todoItems}
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



