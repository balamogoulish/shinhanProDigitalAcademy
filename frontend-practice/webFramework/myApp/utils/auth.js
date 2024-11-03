// utils 폴더 생성 후 utils 안에 auth.js 생성 후 작성
//utils 폴더 만들고 그 아래에 auth.js 파일 생성
const jwt= require('jsonwebtoken');

function createToken(visibleUser,maxAge=60*60*24*3){
    return jwt.sign(visibleUser,process.env.JWT_SECRET||'MyJWT',{
        expiresIn:maxAge,
    });
}

function verifyToken(_token){
    if(!_token){
        return null;
    }
    const verifiedToken = jwt.verify(_token,process.env.JWT_SECRET||'MyJWT');
    return verifiedToken;
}

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
  
module.exports={
    authenticate,
    createToken,
    verifyToken
};