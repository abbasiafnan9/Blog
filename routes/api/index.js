const router = require('express').Router();

const postRoutes = require("./postscontroller");
router.use("/posts",postRoutes);

const commentRoutes = require("./reviewcontroller");
router.use("/comments",reviewRoutes);

const userRoutes = require("./userscontroller");
router.use("/users",userRoutes);


module.exports = router