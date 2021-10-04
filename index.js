"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var userId = todo.userId;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    // console.log(`The todo value-> ${userId}, ${id}, ${title}, ${completed}`);
    logTodo(userId, id, title, completed);
});
var logTodo = function (userId, id, title, completed) {
    console.log("The todo value-> " + userId + ", " + id + ", " + title + ", " + completed);
};
