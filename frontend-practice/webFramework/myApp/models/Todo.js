// model 폴더에 Todo.js 생성 후 작성
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: "white"
    }
})
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;