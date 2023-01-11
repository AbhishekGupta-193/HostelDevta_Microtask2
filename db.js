const mongoose=require('mongoose');

const url ="mongodb://localhost:27017"

const mongoConnect =()=>{
    mongoose.connect(url,()=>{
        console.log("Connected bruh...")
    })
}

module.exports={mongoConnect};