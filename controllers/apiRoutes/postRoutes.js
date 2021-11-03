const express = require('express');
const router =  express.Router();
const {Post} = require('../../models/Post');

router.get("/",(req,res)=>{
   Post.findAll().then(postData=>{
       res.json(postData)
   }).catch(err=>{
       console.log(err);
       res.status(500).json({err})
   })
})

module.exports = router;
