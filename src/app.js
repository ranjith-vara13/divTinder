const express = require ('express');
const app = express();

app.use("user", (req, res) => {
    res.send("hahahahahhaha");
});

app.post ("/user",(req,res) => {  
res.send ("data is successfully saved to database!");
});

app.delete ("/user",(req, res) => {
    res.send ("data successfully deleted!");
});

app.get("/user",(req, res) => {
    res.send({ firstName: "Ranjith", lastName: "vara" });
})
 
app.use ("/test",(req, res) => {
    res.send("hello from the server!");
});

app.listen (3000, () => {
    console.log("server is successfully listening on port 3000....")
});