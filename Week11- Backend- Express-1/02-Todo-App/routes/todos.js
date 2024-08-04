const express = require("express");
const router = express.Router();

// import controller
const { CreateTodo } = require('../controllers/CreateTodo');
const { GetTodos, GetTodosById } = require('../controllers/GetTodos');
const { UpdateTodoById } = require('../controllers/UpdateTodoById');
const { DeleteTodoById } = require('../controllers/DeleteTodoById')

// define API routes
router.post("/createTodo", CreateTodo);
router.get('/getTodos', GetTodos);
router.get('/getTodoById/:id', GetTodosById);
router.put('/updateTodoById/:id', UpdateTodoById);
router.delete('/deleteTodoById/:id', DeleteTodoById);

module.exports = router;