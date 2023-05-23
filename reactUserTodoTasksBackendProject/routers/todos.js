var express = require("express");

var router = express.Router();
var Todos = require("../controllers/todosList/index");
var Protected=require("./protectedRoute");

router.use(Protected)
router.get("/", Todos.getTodosList);
router.post("/", Todos.createTodo);
router.get("/:id", Todos.getTodo);

module.exports = router;
