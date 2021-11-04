const router = require('express').Router();

const postRoutes = require("./postscontroller");
router.use("/posts",postRoutes);

const reviewRoutes = require("./reviewcontroller");
router.use("/reviews",reviewRoutes);

const userRoutes = require("./userscontroller");
router.use("/users",userRoutes);


module.exports = router