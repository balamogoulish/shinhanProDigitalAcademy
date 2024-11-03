const mongoose = require('../db')

const boardSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: String,
    createdAt: {type: Date, default:Date.now}
}, {
    timestamps: true,
    toObject:{
        virtuals: true
    },
    toJSON:{
        virtuals: true //역참조
    }
})
boardSchema.virtual('comments', {
    ref: "Comment", // 역참조할 모델 이름
    localField: "_id", // 현재 ID (Movie의 id)
    foreignField: 'board' // 역참조할 모델에서 Movie를 가리키고 있는 이름.
 })
 

const Board = mongoose.model('Board', boardSchema);
module.exports = Board