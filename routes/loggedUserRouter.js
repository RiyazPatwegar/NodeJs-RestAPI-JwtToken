const express = require("express");
const userController = require("../controllers/user");
const tokenMiddleware = require("../middleware/verify-token");
const router = express.Router();

router.post('/getProfile',tokenMiddleware,userController.getProfile);

module.exports = router;