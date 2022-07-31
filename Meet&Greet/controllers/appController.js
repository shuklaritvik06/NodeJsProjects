const { v4: uuidv4 } = require("uuid");

function getTestPage(req, res) {
  res.redirect(`/${uuidv4()}`);
}

function getLoginPage(req, res) {
  res.send("Login page");
}

function getRegisterPage(req, res) {
  res.send("Register page");
}

function getRoomPage(req, res) {
  res.render("home");
}

module.exports = {
  getTestPage,
  getLoginPage,
  getRegisterPage,
  getRoomPage,
};
