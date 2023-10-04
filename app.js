const express=require('express');
const mongoose=require('mongoose');
const app=new express();

//import body_prser for require data from body
const bodyParser=require('body-parser');
app.use(bodyParser.json());

const uri="mongodb://127.0.0.1:27017/Student";
const option={
    user:'', pass:''
}

mongoose.connect(uri,option)
    .then(()=>{
        console.log("Connection established");
    })
    .catch((e)=>{
        console.log(e);
    })
//Require Router
const Router=require('./src/Routes/api');

//Routing point delcare

app.use('/api',Router);

app.use('*',(req,res)=>{
    res.status(200).json({
        status:404
    })
})


module.exports=app;