const express = require('express');
const { todo } = require('node:test');
const router = express.Router();

let todos = [
  { id: 1, task: "ไปร้านสะดวกซื้อ 7-11 ซื้อขนม", completed: false },
  { id: 2, task: "พาหมาไปเดินเล่น", completed: true },
  { id: 3, task: "อ่านหนังสือ", completed: false }
];

router.get("/todo", (req, res) => {
  // res.json(todos);
  res.render("index", { todos });
});

// Create a new todo item
router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/newTodo", (req, res) => {
  const body = req.body;
  const newTask = {
    id: todos.length + 1,
    task: body.todo,
  }
    todos.push(newTask);
    // console.log({body});
    res.redirect("/todo");
});

router.get("/edit/:id", (req, res) => {
  const params = req.params;
  // console.log({params});
  const todo = todos.filter(todo => todo.id == params.id);
  // console.log("Todo", todo);
  res.render("edit", {todo: todo[0]});
});

// Update a todo item
router.post("/edit/:id", (req, res) => {
  const params = req.params;
  const body = req.body;
  let index = todos.findIndex(el => el.id == params.id);
  console.log({index});
    if (index != -1) {
      todos[index].task = body.todo;
    }
    res.redirect("/todo");
});

// Delete a todo item
router.post("/delete/:id", (req, res) => {
  const params = req.params;
  let newTodo = todos.filter(el => el.id != params.id);
  todos = newTodo;
    res.redirect("/todo");
});

// router.post;
// router.put();
// router.delete();

module.exports = router;