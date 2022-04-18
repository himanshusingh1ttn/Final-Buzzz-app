

const express = require("express");
const cors = require('cors');
const path = require('path');
const file = require("./config/config");

const app = express();
const cookieParser = require("cookie-parser");
if(file.NODE_ENV !== "production"){
    // require("dotenv").config({path:"backend/config/config.env"});
}




app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));
app.use(cookieParser());

//importing routes

const post = require("./routes/post");

const user = require("./routes/user");

//using routes

app.use("/api",post);
app.use("/api",user);

//localhost:4000/api/post/upload
app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
  app.get("/abc",(req,res)=>{
      res.send('mongodb+srv://himanshu:himanshu@clusterfree.wmx1p.mongodb.net/SocialMedia?retryWrites=true&w=majority')
  })
module.exports = app;
