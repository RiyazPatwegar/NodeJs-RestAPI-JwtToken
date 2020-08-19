const db = require("../util/database");

exports.getProfile = (req, res, next) => {
    if(!req.userId){
        const error = new Error("Access denied");
        error.statusCode = 400;
        next(error);
    }else{
        db.execute("SELECT id,name,email FROM users WHERE id='"+req.userId+"' ").then((row, mimData)=>{
            res.status(200).json({statusCode: 200, data: row[0][0]});
        }).catch((err)=>{
            const error = new Error("User details not found");
            error.statusCode = 400;
            next(error);
        });
    }
}