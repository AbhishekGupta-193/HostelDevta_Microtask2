const mongoose=require('mongoose')
mongoose.set('strictQuery', true);

//MODEL OF SCHEMA FOR AUTHENTICATION PART 
const {Schema}=mongoose;
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const User=mongoose.model('user',userSchema);
module.exports={User};