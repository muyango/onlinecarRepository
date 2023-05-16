const jwt = require('jsonwebtoken');
const userModel=require("../model/person");
const checkAuth=async (req,res,next)=>{
    const token=req.header("x-auth-token");

    try {
        const user=await jwt.verify(token,process.env.TOKEN_SECRET)
        req.user=user.email;
        console.log(token);
        next();
    } catch (error) {
        res.status(200).json({'code':'301','message':'session timed out'});
    }
}

module.exports=checkAuth;