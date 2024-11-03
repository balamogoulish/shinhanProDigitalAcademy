const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');

//전체 조회
router.get('/', (req, res, next)=>{
    Comment.find().then(comments=>{
        res.json(comments)
    }).catch(err=>{
        next(err)
    })
})
//특정 아이디 조회
router.get('/:id', (req, res, next)=>{
    Comment.findById(req.params.id).then(comment=>{
        res.json(comment);
    }).catch(err=>{
        next(err);
    })
});
//코멘트 추가
router.post('/', (req, res, next)=>{
    console.log(req.body);
    Comment.create(req.body).then(comment=>{
        res.json(comment.board)
    }).catch(err=>{
        next(err)
    })
})
//코멘트 수정
router.put('/:title', (req, res, next)=>{
    console.log(req.body);
    Comment.findOneAndUpdate({title: req.params.title}, req.body
    ).then(comment=>{
        res.json(comment)
    }).catch(err=>{
        next(err)
    })
})
//코멘트 삭제
router.delete('/:id', (req, res, next)=>{
    Comment.findByIdAndDelete(req.params.id).then(comment=>{
        res.json(comment)
    }).catch(err=>{
        next(err)
    })
})
//특정 board에 대한 코멘트 추가



//특정 board에 대한 코멘트를 모두 조회하기
module.exports = router;