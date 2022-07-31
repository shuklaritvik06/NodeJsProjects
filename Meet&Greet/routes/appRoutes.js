const express = require("express");
const router = express.Router();
const {
  getTestPage,
  getLoginPage,
  getRegisterPage,
  getRoomPage
} = require("../controllers/appController");

router.get("/", getTestPage);

router.get("/register", getRegisterPage);

router.get("/login", getLoginPage);

router.get("/:id", getRoomPage);

module.exports = router;
