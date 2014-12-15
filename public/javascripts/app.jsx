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

            var thing = this.refs.todoTitle.getValue();
            if (!thing) {
              return;
            }
            this.props.handleKeyDown({desc: thing});

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

    var TodoItem = React.createClass({
        getInitialState: function() {
            return {
                status: "NYS",
                canEdit: false
            };
        },

        handleCheck: function() {
            // this.refs.todo.getDOMNode().innerText = "gee";
            if (this.refs.checkTodo.getChecked()) {
                this.setState({
                    status: "completed"
                });
            } else {
                this.setState({
                    status: "NYS"
                });
            }
        },

        handleRemove: function() {
            this.props.handleRemoveItem(this.props.data.id);
        },

        handleEdit: function(event) {
            event.stopPropagation();
            event.preventDefault();

            this.setState({
                canEdit: true
            });

            var el = this.refs.todo.getDOMNode();
            var range = document.createRange();
            var sel = window.getSelection();

            range.setStart(
                el.childNodes[0].childNodes[0], el.innerText.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);

            // try to focus on dic, but not works..
            $(el).sendkeys(" ");
            $(el).focus();
            $(el).click();
        },

        handleKeyDown: function(event) {
            if(event.which !== ENTER_KEY) {
                return;
            }
            event.preventDefault();

            var thing = this.refs.todo.getDOMNode().innerText;
            if (!thing) {
              return;
            }
            // this.props.handleKeyDown({desc: thing});
            this.setState({
                canEdit: false
            });
            // this.refs.todo.getInputDOMNode().value = '';
            return;
        },

        handleBlur: function () {
            this.setState({
                canEdit: false
            });
        },

        render: function() {
            return (
                <div className="todo-item">
                    <Input
                        ref="checkTodo"
                        type="checkbox"
                        onChange={this.handleCheck}
                    />
                    <label className={this.state.status}
                          type="text"
                          ref="todo"
                          contentEditable={this.state.canEdit}
                          onDoubleClick={this.handleEdit}
                          onKeyDown={this.handleKeyDown}
                          onBlur={this.handleBlur}
                    >
                        {this.props.data.desc}
                        <span
                            className="glyphicon glyphicon-remove-circle"
                            onClick={this.handleRemove}
                        />
                    </label>
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

        handleRemoveItem: function (del_id) {
            var newTodoList = this.state.todoList.filter( function(todo) {
                return (del_id !== todo.id);
            });

            // console.log(newTodoList.length);
            // weird issue..setState() not works..
            // this.setState({todoList: newTodoList});
            this.state.todoList = newTodoList;
            this.forceUpdate();

            // console.log(this.state.todoList.length);
            this.updateItems();
        },

        handleTodoTitleKeyDown: function (todo) {
            var newTodoList = this.state.todoList;
            var self = this;

            console.log();
            $.ajax({
                url: "/uuid",
                type: 'GET',
                success: function(uuid) {
                  todo.id = uuid;

                  newTodoList.push(todo);
                  this.setState({todoList: newTodoList});
                  this.updateItems();
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(status, err.toString());
                }
            });

            // newTodoList.push(todo);
            // this.setState({todoList: newTodoList});
            // //console.log(this.state.todoList);

            // this.updateItems();

            //var val_1 = this.refs.todoTitle.getDOMNode().value.trim();
            //var val_2 = this.state.refs.todoTitle.getDOMNode().value.trim();

            //console.log(val_1);
            //console.log(val_2);
            // if (val) {
            //     this.props.model.addTodo(val);
            //     this.refs.newField.getDOMNode().value = '';
            // }
        },

        updateItems: function() {
            var allItems = this.state.todoList.map( function(todo) {
                                return (
                                    <TodoItem data={todo} handleRemoveItem={this.handleRemoveItem} />
                                );
                            }.bind(this));
            this.setState({
                todoItems: (
                    <div className="todo-items col-md-6 col-centered">
                        {allItems}
                    </div>
                )
            });
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



