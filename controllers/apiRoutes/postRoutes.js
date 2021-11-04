const express = require('express');
const { ExclusionConstraintError } = require('sequelize/types');
const router =  express.Router();
const {Post} = require('../../models/Post');

router.get("/",(req,res)=>{
   Post.findAll().then(postData=>{
       res.json(postData)
   }).catch(err=>{
       console.log(err);
       res.status(500).json({err})
   });
});

router.get("/:id",(req,res)=>{
    Post.findByPk(req.params.id).then(singlePost=>{
       if(singlePost){
         res.json(singlePost)
       } else {
           res.status(404).json({err:"no such post!"})
       }
  
}).catch(err=>{
    console.log(err);
    res.status(500).json({err})
})

})

router.post("/", (req,res)=>{
    Post.create({
        dish:req.body.dish,
        image:req.body.image


    }).then(newPost=>{
        res.json(newPost)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err})
    })
})

router.put("/:id",(req,res)=>{
    Post.update({
        dish:req.body.dish,
        image:req.body.image

    },{
        where:{
            id:req.params.id
        }
    }).then(updatedData=>{
        if(updatedData[0]){
            res.json(updatedData)
        } else {
            res.status(404).json({err:"no post found!"})
        }
        
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err})
    })
})

router.delete("/:id",(req,res)=>{
    Post.destroy({
        where:{
            id:req.params.id
        }
    }).then(deletedPost=>{
        if(deletedPost){
            res.json(deletedPost)
        }else {
            res.status(404).json({err:"no such post!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err})
    })
})


module.exports = router;
