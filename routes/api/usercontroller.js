const express = require('express');
const router = express.Router();
const { User, Post } = require('../../models');
const bcrypt = require("bcrypt");

router.get('/', (req,res) => {
    User.findAll({
        include:[Post]
    }).then(dbUsers=>{
        if(dbUsers.length){
            res.json(dbUsers)
        } else {
            res.status(404).json({message:"No users were found!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"error",err:err})
    })
});

router.get("/:id", (req,res) => {
    User.findOne({
        where: {id: req.params.id},
        include: [Post]
    }).then(dbUsers=>{
        if(dbUsers){
            res.json(dbUsers)
        } else {
            res.status(404).json({message:"No users were found!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"error",err:err})
    })
})

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
            res.status(401).json({message:"your username or password is incorrect."})
        } else {
            if(bcrypt.compareSync(req.body.password,foundUser.password)){
                req.session.user = {
                    username: foundUser.username,
                    id: foundUser.id
                };
                res.status(200).json("logged in.")
            } else {
                req.session.destroy();
                res.status(401).json({message:"your username or password is incorrect."})
            }
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router