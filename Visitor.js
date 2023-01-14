const mongoose = require('mongoose');

const { Schema } = mongoose;

  const VisitorSchema = new Schema({
    countOfVisitors:{type: Number ,
        default:0
   },
  },{timestamps:true});
  const countOfVisitor=mongoose.model('visitor',VisitorSchema);
  
  module.exports=countOfVisitor;