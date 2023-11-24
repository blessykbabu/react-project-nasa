const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const MONGO_URL=process.env.MONGO_URL;
mongoose.connection.once('open',()=>{
    console.log("MONGODB connected");
})
mongoose.connection.on('error',(err)=>{  //error console,when there is an error 
    console.error(err);
});
async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect(){
    await mongoose.disconnect();
}
module.exports={
    mongoConnect,
    mongoDisconnect
}