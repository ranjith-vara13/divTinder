const express = require ('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "karthik",
         lastName: "vara",
         emailId: "karthik@vara.com",
         password: "karthik@1234",
    });
   await user.save();
   res.send("User added successfully!"); 
});

connectDB()
.then(()=>{
    console.log("Database connection established..");
    
    app.listen (3000, () => {
    console.log("server is successfully listening on port 3000....")
});

})
.catch((err) =>{
    console.error("Database cannot be connected");
});

