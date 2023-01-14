// const express=require('express')
const router =require('express').Router();
const jwt=require('jsonwebtoken');
const {User}=require('../User.js');
const bcrypt=require('bcrypt')
const {filter}=require('../filter.js')

const JWT_SECRET="abhi<kg"
//creating new users
router.post('/createUser',async(req,res)=>{
    // console.log(req.body);
    const {username,email,password} = req.body;
    try {
        let user=await User.findOne({email});
        if(user){
            return res.json({status:"User already exists"})//json objects takes key val pairs
        }
       const salt=await bcrypt.genSalt(9); //dummy string to be added to our password
       const pasword=await bcrypt.hash(password,salt);
       
       user=await User.create({
        username:username,
        password:pasword,
        email:email
       })
       
       const data={
        id:user.id
       }
    
     
       const authToken=jwt.sign(data,JWT_SECRET);
       res.json({status:"User Created",authToken:authToken,user})
    
    
    } catch (error) {
        console.log(error)
        res.send("internal server error")
    }
   
})

//login using credentials
router.post('/loginUser',async(req,res)=>{
    const{email,password}=req.body;
    try {
        const user=await User.findOne({email:email})
    if(!user){
        return res.send("User not found")
    }
    const pasword=await bcrypt.compare(password,user.password);
    if(!pasword){
        return res.send("Wrong password")
    }
    const data={
        id:user.id
    }
    const authToken=jwt.sign(data,JWT_SECRET);
    res.json({status:"Logged in Successfully",authToken,user})

    } catch (error) {
        console.error(error.message);
        res.send("Internal Server Error")
    }
    

})

//delete user credentials
router.post('/deleteUser',filter,async(req,res)=>{
    
    try {
        let user=await User.findById(req.user.id);
        if(!user){
            return res.send("User dosent exists")
        }
        user=await User.findByIdAndDelete(req.user.id);
        res.send("User Deleted")
    } catch (error) {
        console.error(error);
        res.send("Internal Server Error")
    }
    
})

//Update User credentials

router.put('/updateUser',filter,async(req,res)=>{
    try {
        const {username,email,password}=req.body;
    let user=await User.findById(req.user.id);
    if(!user){
        return res.send("User dosent exists")
    }
    const salt=await bcrypt.genSalt(10);
    const pasword=await bcrypt.hash(password?password:"",salt);
    user=await User.findByIdAndUpdate(req.user.id,{username:username?username:user.username,email:email?email:user.email,password:password?pasword:user.password},{new:true})
    res.json({status:"User Updated",updatedUser:user})
    } catch (error) {
        console.error(error);
        res.send("Internal Server Error")
    }
    
})

module.exports=router;