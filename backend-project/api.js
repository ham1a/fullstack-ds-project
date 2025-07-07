const express = require("express");
const router = express.Router();

let todos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Study Vue", completed: true },
];

// GET all todos
router.get("/todos", (req, res) => {
  res.json({ message: "All todos", data: todos });
});

// GET a single todo
router.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === todoId);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json({ message: "Todo found", data: todo });
});

// POST create new todo
router.post("/todos", (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: completed ?? false,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Todo created", data: newTodo });
});

// PUT update full todo
router.put("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, completed } = req.body;

  const index = todos.findIndex((t) => t.id === todoId);
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  todos[index] = { id: todoId, title, completed };
  res.json({ message: "Todo fully updated", data: todos[index] });
});

// PATCH update part of a todo
router.patch("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title, completed } = req.body;

  const index = todos.findIndex((t) => t.id === todoId);
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  if (title !== undefined) todos[index].title = title;
  if (completed !== undefined) todos[index].completed = completed;

  res.json({ message: "Todo partially updated", data: todos[index] });
});

module.exports = router;
