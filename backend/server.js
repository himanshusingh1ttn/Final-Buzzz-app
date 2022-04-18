const app = require("./app");
const file = require("./config/config");
const cloudinary =require("cloudinary");
const { connectDatabase } = require("./config/database");

connectDatabase();

cloudinary.config({
   cloud_name: file.CLOUDINARY_NAME,
   api_key: file.CLOUDINARY_API_KEY,
   api_secret: file.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT,()=>{
   console.log(`Server is running on port ${process.env.PORT}`);
});