const express = require('express');
const router = express.Router();
const postRoutes = require("./postRoutes");

router.use("/post", postRoutes);
router.get("/",(req,res)=>{
    res.send("hello")
})
module.exports = router;