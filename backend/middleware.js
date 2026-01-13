const jwt=require("jsonwebtoken")
const {JWT_SECRET} =require('./config')

console.log("before middleware")
function authMiddleware(req,res,next){
    console.log("after middleware")
    const newauth=req.headers.authorization
    console.log(typeof(newauth))
    if(!newauth || !newauth.startsWith('Bearer')){
        return res.status(403).json({})
    }
    
    console.log("reach here")
    const token=newauth.split(' ')[1]
    try{
        const decoded=jwt.verify(token,JWT_SECRET)
        if(decoded.userid){
            req.userid=decoded.userid;
            next()
        }
    }
    catch(err){
        console.log('it is catched')
        return res.status(403).json({})
    }

}

module.exports=authMiddleware