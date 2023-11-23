const mongoose=require('mongoose')
dotenv.config()
mongoose.connection.once('open',()=>{
    console.log("MONGODB connected");
})