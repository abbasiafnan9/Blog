const router = require('express').Router();
const { Post, User, Review } = require('../../models');

router.post("/:id", (req, res) => {
    if(!req.session.user){
        res.status(401).json({message:"please log in"})
    }else {
        Review.create({
            review:req.body.review,
            UserId:req.session.user.id,
            PostId:req.params.id
        }).then(newReview => {
            res.json(newReview)
        }).catch(err => {
            console.log(err);
            res.status(500).json("error")
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
        res.status(401).json({message:"please log in"})
    }else{
        Review.update(req.body,{
            where:{
                id:req.params.id
            }
        }).then(updatedReview => {
            if(!updatedReview){
                res.status(404).json("comment not found")
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
        res.status(401).json({message:"please log in"})
    }else {
        Review.destroy({where:{id:req.params.id}})
        .then(delReview => {
            if(!delReview){
                res.status(404).json("Review not found.")
            }else{
                res.status(200).json("Review was deleted.")
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json("error")
        })
    }
});

module.exports = router