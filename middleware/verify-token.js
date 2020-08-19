const jwt = require("jsonwebtoken");

module.exports = (req, res, next) =>{

    const authHeader = req.get('Authorization');
    if(!authHeader){
        const error = new Error("No authorization found");
        error.statusCode = 402;
        next(error);
    }

    const token = req.get('Authorization').split(' ')[1];
    let decodeToken;
    try{
        decodeToken = jwt.verify(token,'its-my-secret-key');    
    }catch(err){
        err.statusCode = 400;
        next(err);
    }

    if(!decodeToken){
        const error = new Error("Invalid Token");
        error.statusCode = 402;
        next(error);
    }else{
        req.userId = decodeToken.id;
        next();
    }
}