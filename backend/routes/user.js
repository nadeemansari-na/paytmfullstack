const express=require('express')
const router=express.Router()
const {check}=require('../zod')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../config')
const bcrypt =require('bcrypt')
const {akhir, account} =require('../db')
const authMiddleware = require('../middleware')
const { ModifiedPathsSnapshot } = require('mongoose')


//signup
router.post('/signup',async (req,res)=>{
  console.log("debug the code")
   const username=req.body.username
   const firstname=req.body.firstname
   const lastname=req.body.lastname
   const password=req.body.password
    const response=check.safeParse({
        username,
        firstname,
        lastname,
        password
    })
    // const aftersalt=await bcrypt.hash(password,10);
    // console.log(aftersalt)

    console.log("before response")
    if(!response.success){
      return  res.json({ msg :"incorrect inputs"})
    }
    const existing= await akhir.findOne({ username})
    if(existing){
    return res.status(411).json({
        message : "Email already taken"
    })
    }
  const user =await akhir.create({
    username,
    firstname,
    lastname,
    password
  })
  const userid=user._id;

  //initialize new account balance for the user......
    await account.create({
      userid,
      balance:1+Math.random()*1000
    })
console.log("not reached signin")
  // //signin
  const token=jwt.sign({userid},JWT_SECRET)
  console.log("token=",token)
  res.json({
    msg:"user created successfully",
    username,
    token:token
  })
  
})

//signin
router.get('/signin',async (req,res)=>{
  const {username, password}=req.headers
  
  const exist=await akhir.findOne({username:username, password:password})
  if(!exist){
    return res.json({msg:"you are not signuped"})
  }
  const userid=exist._id
  const token=jwt.sign({userid},JWT_SECRET)
  res.json({
    msg:"got the token",
    username,
    token:token
  })
})

//update
router.put('/update',authMiddleware,async (req,res)=>{

 const {password,firstname,lastname}=req.body
  console.log(req.userid.username)
  const newcheck=check.safeParse({
    username:req.userid.username,
    password,
    firstname,
    lastname
  })
  console.log(newcheck)
  if(!newcheck.success){
    return res.status(411).json({
      msg : "error while aploading information"
    })
  }
  const uptodate=await akhir.updateOne({userid:req.userid},{firstname,lastname,password})
  res.json({
    msg:"has been updated succussfully",
  })
})

//get the other user from the backend
router.get('/bulk',async (req,res)=>{
  const filter=req.query.filter || ""
  const users=await akhir.find({
    $or:[{
      firstname:{
        "$regex":filter
      },
    },{
      lastname:{
        "$regex":filter
      }
    }]
  })

  //donot return password to other user
  res.json({
    user:users.map(user=>({
      username:user.username,
      firstname:user.firstname,
      lastname:user.lastname,
      _id:user._id
    }))
  })
})


module.exports=router