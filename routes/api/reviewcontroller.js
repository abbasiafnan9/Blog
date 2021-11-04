const router = require('express').Router();
const { Post, User, Review } = require('../../models');

router.post("/:id", (req, res) => {
    if(!req.session.user){
<<<<<<< HEAD
        res.status(401).json({message:"please log in first"})
=======
        res.status(401).json({message:"please log in"})
>>>>>>> dev
    }else {
        Review.create({
            review:req.body.review,
            UserId:req.session.user.id,
            PostId:req.params.id
        }).then(newReview => {
            res.json(newReview)
        }).catch(err => {
            console.log(err);
<<<<<<< HEAD
            res.status(500).json("internal server error")
=======
            res.status(500).json("error")
>>>>>>> dev
        })
    }
});

router.get("/", (req,res) => {
    Review.findAll({include: [User]})
    .then(allReviews => {
        res.json(allReviews)
    }).catch(err => {
        console.log(err);
        res.status(500).json("error")
    })
})

router.put("/:id", (req,res) => {
    if(!req.session.user){
<<<<<<< HEAD
        res.status(401).json({message:"please log in first"})
=======
        res.status(401).json({message:"please log in"})
>>>>>>> dev
    }else{
        Review.update(req.body,{
            where:{
                id:req.params.id
            }
        }).then(updatedReview => {
            if(!updatedReview){
<<<<<<< HEAD
                res.status(404).json("review was not found")
=======
                res.status(404).json("comment not found")
>>>>>>> dev
            }else{
                res.json(updatedReview)
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json("error")
        })
    }
});

router.delete("/:id", (req,res) => {
    if(!req.session.user){
<<<<<<< HEAD
        res.status(401).json({message:"please log in first"})
    }else {
       Review.destroy({where:{id:req.params.id}})
        .then(delReview => {
            if(!delReview){
                res.status(404).json("review was not found.")
            }else{
                res.status(200).json("review has been deleted.")
=======
        res.status(401).json({message:"please log in"})
    }else {
        Review.destroy({where:{id:req.params.id}})
        .then(delReview => {
            if(!delReview){
                res.status(404).json("Review not found.")
            }else{
                res.status(200).json("Review was deleted.")
>>>>>>> dev
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json("error")
        })
    }
});

module.exports = router