const express = require("express");
const router = express.Router();
const user = require("../models/user")

router.get('/users', async (req, res) =>{
    try{
        const users = await user.find().sort({createdAt: -1});
        res.json(users);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
});

module.exports = router;