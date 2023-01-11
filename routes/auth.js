// const express=require('express')
const router =require('express').Router();
const jwt=require('jsonwebtoken');
const {User}=require('../User.js');
const bcrypt=require('bcrypt')

//creating new users
router.post('/createUser',async(req,res)=>{

    try {
        const user=await User.findOne({email:req.body.email});
        if(user){
            res.json({status:"User already exists"})//json objects takes key val pairs
        }
       const salt=await bcrypt.genSalt(193); //dummy string to be added to our password
       const pasword=await bcrypt.hash(req.body.password,salt);
       
       user=await User.create({
        username:req.body.username,
        password:pasword,
        email:req.body.email
       })
       
       const data={
        id:user.id
       }
    
       const JWT_SECRET="abhi<kg"
       const authToken=jwt.sign(data,JWT_SECRET);
       res.json({status:"User Created",authToken:authToken,user})
    
    
    } catch (error) {
        console.log(error)
        res.send("internal server error")
    }
   
})






module.exports=router;