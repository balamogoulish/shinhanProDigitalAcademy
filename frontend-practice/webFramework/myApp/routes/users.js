// routes 폴더에 users.js 생성 후 작성
var express = require('express');
var router = express.Router();
var User = require('../models/User');
const {createToken, verifyToken} = require('../utils/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.viewCount){
    //메모리에 저장, 
    req.session.viewCount+=1;
  }
  else{
    req.session.viewCount=1;
  }

  console.log(req.session.viewCount);
  // console.log(req.session);
  res.send('respond with a resource');
});

//회원가입
router.post('/signUp',async(req,res,next)=>{
  try{
    const {email,password}=req.body;
    console.log(req.body);
    const user = await User.signUp(email,password);
    res.status(201).json(user);
  }catch(err){
    console.error(err);
    res.status(400);
    next(err);
  }

});

//로그인
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const tokenMaxAge = 60 * 60 * 24 * 3;
    const token = createToken(user, tokenMaxAge);
    user.token = token;

    res.cookie("authToken", token, {
      httpOnly: true,
      maxAge: tokenMaxAge * 1000,
    });

    console.log(user);
    res.status(201).json(user);
  } catch (err) {
      console.error(err);
      res.status(400);
      next(err);
  }
})

//로그아웃
router.all('/logout',async(req,res,next)=>{
  try{
    const {email,password} = req.body;
    const user = await User.login(email,password);
    const tokenMaxAge = 60*60*24*3;
    const token = createToken(user,tokenMaxAge);

    user.token=token;

    res.cookie('authToken',token,{
      httpOnly:true,
      expires:new Date(Date.now()),
    });
    
    res.cookie('authToken','');
    console.log(user);
    res.status(201).json(user);
  }catch(err){
    console.error(err);
    res.status(400);
    next(err);
  }
});

//토큰 인증
async function authenticate(req, res, next) {
  let token = req.cookies.authToken;
  let headerToken = req.headers.authorization;
  if (!token && headerToken) {
    token = headerToken.split(" ")[1];
  }
  const user = verifyToken(token);
  req.user = user;
  if(!user){
    const error =new Error('authorization failed');
    error.status=403;
    next(error);
  }
  next();
}

//인증된 사람만 접근가능하도록 (authenticate 함수 중간에 인자로 넣어줌)
router.get("/protected", authenticate, async (req, res, next) => {
  console.log(req.user);
  res.json({ data: "민감한 데이터" });
});

module.exports = router;