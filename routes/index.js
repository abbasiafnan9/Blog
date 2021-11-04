
const router = require('express').Router()

const frontEndRoutes = require("./frontEndRoutes");
router.use(frontEndRoutes);

const apiRoutes = require("./api");
router.use("/api",apiRoutes);

const express = require('express');
const router = express.Router();
const postRoutes = require("../apiRoutes/postRoutes");


router.use("/post", postRoutes);
router.get("/",(req,res)=>{
    res.send("hello")
})
module.exports = router;