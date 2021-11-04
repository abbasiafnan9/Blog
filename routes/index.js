const express = require('express');
const router = express.Router();
const postRoutes = require("../apiRoutes/postRoutes");

router.use("/post", postRoutes);
router.get("/",(req,res)=>{
    res.send("hello")
})
module.exports = router;