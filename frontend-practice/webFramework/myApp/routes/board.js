const express = require('express');
const router = express.Router();

const Board = require('../models/Board');
const Comment = require('../models/Comment')


router.get('/', (req, res, next)=>{
    Board.find().then(boards=>{
        res.cookie('CookieName', 'CookieValue', {
          maxAge: 1000*60*60*24,
          httpOnly: true,
          secure: false,
          signed: false
        })
        res.json(boards)
    }).catch(err=>{
        next(err)
    })
})


const BOARD_HISTORY_COOKIE = 'board-history';
const BOARD_HISTORY_SESSION = 'boardPath';

router.get('/:id', (req, res, next)=>{
    // Board.findById(req.param.id).then(board=>{
    Board.findById(req.params.id).then(board=>{
        // 쿠키에 방문 board id 3개까지 저장
        // let boardHistory = req.cookies[BOARD_HISTORY_COOKIE];
        // if (boardHistory){
        //     boardHistory = JSON.parse(boardHistory);
        // }else{
        //     boardHistory = []
        // }

        // console.log(boardHistory);
        
        // boardHistory.push(req.params.id);
        // if (boardHistory.length > 3){
        //     boardHistory.shift();
        // }
        // res.cookie(BOARD_HISTORY_COOKIE, JSON.stringify(boardHistory), {
        //     secure:true
        // })
        let boardPathArr = []
        if(req.session[BOARD_HISTORY_SESSION]){
          boardPathArr = req.session[BOARD_HISTORY_SESSION]
        }
        boardPathArr.push(board.title)
        if(boardPathArr.length > 10){
          boardPathArr.shift();
        }
        req.session[BOARD_HISTORY_SESSION] = boardPathArr
        console.log(req.session[BOARD_HISTORY_SESSION]);
        console.log(req.session);
        res.json(board);
    }).catch(err=>{
        next(err);
    })
});

router.post('/', (req, res, next)=>{
    console.log(req.body);
    Board.create(req.body).then(board=>{
        res.json(board)
    }).catch(err=>{
        next(err)
    })
})

//특정 보드에 대한 comment 출력
router.get('/:id/comment', (req, res, next)=>{
  Board.findById(req.params.id).populate('comments').then(board=>{
    res.json(board.comments)
  })
})

//특정 보드에 대한 comment 추가
router.post('/:id/comment', (req, res, next)=>{
    Comment.create({...req.body, board: req.params.id}).then(comment=>{
        res.json(comment.board)
    }).catch(err=>{
        next(err)
    })
})

module.exports = router;