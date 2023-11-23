const express=require('express');
const app=express();
app.use(express.json());
app.get('/get-data',(req,res)=>{
    res.status(200).send({status:200,message:"Get data successfully"});
});
module.exports=app