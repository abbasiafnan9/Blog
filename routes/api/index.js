const router = require('express').Router();

<<<<<<< HEAD
const userRoutes = require("./usercontroller");
router.use("/users",userRoutes);

const postRoutes = require("./postcontroller");
router.use("/posts",postRoutes);

const commentRoutes = require("./reviewcontroller");
router.use("/comments",commentRoutes);
=======
const postRoutes = require("./postscontroller");
router.use("/posts",postRoutes);

const commentRoutes = require("./reviewcontroller");
router.use("/comments",reviewRoutes);

const userRoutes = require("./userscontroller");
router.use("/users",userRoutes);

>>>>>>> dev

module.exports = router