const router = require('express').Router();

const userRoutes = require("./usercontroller");
router.use("/users",userRoutes);

const postRoutes = require("./postcontroller");
router.use("/posts",postRoutes);

const commentRoutes = require("./reviewcontroller");
router.use("/comments",commentRoutes);

module.exports = router