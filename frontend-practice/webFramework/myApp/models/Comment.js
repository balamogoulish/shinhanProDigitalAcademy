const mongoose = require('../db')

const commentSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    writer: String,
    board:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref: "Board"
    },
    createdAt: {type: Date, default:Date.now}
})

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment