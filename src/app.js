const express = require ('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const user = require('./models/user');

app.use(express.json());

app.post("/signup",async (req, res)=>{

    const user = new User(req.body);
    try{
        await user.save();
        res.send("user added successfully");

    }catch (err) {
        res.status (400).send("error saving the user: "+ err.message);
    } 

});

app.get("/user", async (req,res) => {
    const userEmail = req.body.emailId;

    try {
        const user = await User.findOne({emailId: userEmail});
    res.send(user); 
} catch (err){
    res.status(400).send("something went wrong");
}
});

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try{ 
        const user = await User.findByIdAndDelete (userId);
        res.send ("user deleted successfully");
    } catch (err) {
        res.status(400).send("something went wrong");
    }
});


app.patch("/user", async(req,res) =>{
    const userId = req.body.userId;
   
    const data = req.body;
    try {
        const ALLOWED_UPDATES = ["userId", "photoUrl", "about", "gender", "age", "skills"];
        const isUpdateAllowed = Object.keys(data).every((k)=>
        ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed){
        throw new Errow("Update not allowed");
    }
    if (data?.skills.length > 10) {
        throw new Error ("Skills cannot be more than 10");
    }

        const user = await User.findByIdAndUpdate({ _id: userId}, data,{ runValidators
        : true});
       
        
console.log(user);
        res.send("User updated successfully");
        } catch (err) {
            res.status(400).send ("something went wrong");
        }         
    });
 connectDB()
 .then(()=>{     console.log("Database connection established..");
    
     app.listen (3000, () => {
     console.log("server is successfully listening on port 3000....")
 });

 })
 .catch((err) =>{
     console.error("Database cannot be connected");
});