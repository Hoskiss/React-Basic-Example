var app = app || {};

(function () {
    'use strict';

    app.TodoModel = function (key) {
        this.todo_list = [];
    };

    app.TodoModel.prototype.addTodo = function (title) {
        this.todo_list = this.todo_list.concat({
            title: title,
            completed: false
        });
    };

})();