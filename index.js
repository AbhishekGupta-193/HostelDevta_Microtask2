// install express with `npm install express` 
const express = require('express')
const app = express()
const router=require('./routes/auth.js')
const {mongoConnect}=require('./db')

mongoConnect();
app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.json);
app.use(router);


app.listen(3000,(req,res)=>{
    console.log("Server Listening Mode ON");
})
// export 'app'
// module.exports = app