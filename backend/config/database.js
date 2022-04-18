const mongoose = require("mongoose");

exports.connectDatabase = () => {
    mongoose
    .connect('mongodb+srv://himanshu:himanshu@clusterfree.wmx1p.mongodb.net/SocialMedia?retryWrites=true&w=majority')
    .then((con)=>console.log(`Database Connected: ${con.connection.host}`))
    .catch((err)=>console.log(err));
}