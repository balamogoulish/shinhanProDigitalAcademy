const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const {authenticate} = require('../utils/auth');
// URL
// GET /todos
router.get('/', (req, res) => {
    Todo.find().then(todos => {
        res.json(todos);
    })
})
// POST /todos
router.post('/', authenticate, (req, res) => {
    const {text, color} = req.body;
    Todo.create({
        text,
        color
    }).then(data => {
        res.json(data);
    })
})
// PUT /todos/:todoId
router.put('/:todoId', authenticate, (req, res) => {
    Todo.findByIdAndUpdate(req.params.todoId, {
        text: req.body.text
    }).then(result => {
        res.json(result);
    })
})
// DELETE /todos/:todoId
router.delete('/:todoId', authenticate, (req, res) => {
    Todo.findByIdAndDelete(req.params.todoId).then(result => {
        res.status(204).json();
    })
})

module.exports = router;