const mongoose = require ("mongoose");
 
const connectDB =async () => {
    await mongoose.connect(
        "mongodb+srv://vararanjith1314_db_user:d4f3Y867vq7kC0Ri@namastheranjith.e6ckxye.mongodb.net/DevTinder"

    );
};

module.exports = connectDB;