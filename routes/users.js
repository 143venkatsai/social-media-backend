const express = require("express");
const router = express.Router();
const user = require("../models/user");
const upload = require("../uploads/uploads");

router.post('/', upload.array('images'), async(req, res) => {
    try{
        const {name, socialMediaHandle} = req.body;
        const imagePaths = req.files.map(file => file.path);

        const newUser = new user ({
            name,
            socialMediaHandle,
            images: imagePaths
        });

        await newUser.save();
        res.status(201).json({message: 'User Details Submitted Successfully'});
    } catch(error){
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
});

module.exports = router;