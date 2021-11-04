const express = require('express');
const router = express.Router();
const { User, Post, Review } = require('../../models');
const bcrypt = require("bcrypt");

router.post("/", (req,res) => {
    User.create(req.body)
    .then(newUser => {
        res.json(newUser)
    }).catch(err=> {
        console.log(err);
        res.status(500).json("error")
    })
});

router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(foundUser=>{
        if(!foundUser){
            req.session.destroy();
            res.status(401).json({message:"Your username or password is incorrect."})
        } else {
            if(bcrypt.compareSync(req.body.password,foundUser.password)){
                req.session.user = {
                    username: foundUser.username,
                    id: foundUser.id
                };
                res.status(200).json("Loggged in.")
            } else {
                req.session.destroy();
                res.status(401).json({message:"Your username or password is incorrect."})
            }
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router