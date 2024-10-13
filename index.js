const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const usersRoute = require("./routes/users");
const adminRoute = require("./routes/admin");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', usersRoute);
app.use('/api/admin', adminRoute);

app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGODB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() =>{
    console.log("Connected to DB");
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`);
    });
    
})
.catch((error) =>{
    console.log("Error connecting to DB:", error);
});


console.log("Social Media Backend Connected");