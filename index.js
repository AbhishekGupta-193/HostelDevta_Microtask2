// install express with `npm install express` 
const express = require('express')
const app = express()


const {MongoClient} = require('mongodb');
// const {mongoConnect}=require('./db')
const cors=require('cors')
// mongoConnect();
const mongoose=require('mongoose');

// const url ="mongodb://localhost:27017"
const url2 ="mongodb+srv://task_manager:abhishek123@cluster0.lrrner0.mongodb.net/microtask2?retryWrites=true&w=majority"

const mongoConnect = async () => {
    try {
       mongoose.connect(url2,()=>{
        console.log(`MongoDB Connected: `);
      });
      
    } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit();
    }
  };
mongoConnect()



app.get('/', (req, res) => res.send('Hello World!'))

app.use(cors());
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/visitorCount'));


app.listen(3000,(req,res)=>{
    console.log("Server Listening Mode ON");
})

// export 'app'
// module.exports = app