const http=require('http');
const dotenv=require('dotenv')
dotenv.config()
const app=require("./app.js")
const PORT=process.env.PORT || 8000;
const server=http.createServer(app)
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
