const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
// const authController = require("..controllers/auth");
// const postsController = require("../controllers/posts");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Routes - simplified for now
router.get("/", homeController.getIndex);

module.exports = router;
