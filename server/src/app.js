const express=require('express');
const api=require('./routes/api')//api--require routes from api file
const app=express();
app.use(express.json());
app.use('/v1',api);
app.get('/get-data',(req,res)=>{
    res.status(200).send({status:200,message:"Get data successfully"});
});
module.exports=app