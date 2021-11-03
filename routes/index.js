const router = require('express').Router()

const frontRoutes = require("./frontRoutes");
router.use(frontRoutes);

const apiRoutes = require("./api");
router.use("/api",apiRoutes);

module.exports = router;