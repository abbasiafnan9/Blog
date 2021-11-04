const express = require('express');
const router = express.Router();
const { Post, User, Review } = require('../../models');

router.get("/",(req,res) => {
    Post.findAll({include: [User, Review]})
    .then(allPosts => {
        res.json(allPosts)
    }).catch(err => {
        console.log(err);
        res.status(500).json("error")
    })
});

router.get('/:id', (req,res) => {
    Post.findOne({
        where: {id: req.params.id },
        include: [User, Review]
    }).then(myPost => {
        res.json(myPost)
    }).catch(err => {
        console.log(err);
        res.status(500).json('error')
    })
});

// ./js/newpost.js 
router.post("/", (req,res) => {
    if(!req.session.user){
        res.status(401).json({message:"please log in first"})
    }else{
        Post.create({
          title: req.body.title,
          description: req.body.description,
          UserId:req.session.user.id
        })
          .then(newPost => {
            res.json(newPost);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ message: "There has been an error", err: err });
        });
    }
});

router.put("/:id", (req,res) => {
    if(!req.session.user){
        res.status(401).json("Please log in first")
    }else {
        Post.update(req.body,{
            where:{ id:req.params.id }
        }).then(updatedPost => {
            if(!updatedPost){
                res.status(404).json("post not found")
            }else{
                res.json(updatedPost)
            }
        }).catch(err =>{
            console.log(err);
            res.status(500).json("error")
        })
    }
});

router.delete("/:id", (req,res) => {
    if(!req.session.user){
        res.status(401).json("Please log in first")
    }else{
        Post.destroy({where:{id:req.params.id}})
        .then(delPost => {
            if(!delPost){
                res.status(404).json("The post was not found")
            }else{
                res.status(200).json("The post has been deleted")
            }
        }).catch(err=>{
            console.log(err);
            res.status(500).json("error")
        })
    }
});

module.exports = router