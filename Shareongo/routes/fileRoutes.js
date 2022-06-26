const express = require("express");
const router = express.Router();
const fs = require("fs");
const File = require("../models/shareModel");
const nodeMailer = require("nodemailer");

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/upload", (req, res) => {
  const fileName = req.headers["file-name"];
  if (!fs.existsSync(__dirname + "/uploads")) {
    fs.mkdir(__dirname + "/uploads/", (err) => {
      if (err) {
        throw err;
      }
    });
  }
  req.on("data", (data) => {
    fs.appendFileSync(__dirname + "/uploads/" + fileName, data);
  });
  new File({
    fileName: fileName,
    filePath: __dirname + "/uploads/" + fileName,
  })
    .save()
    .then(() => {
      res.send("File uploaded successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/email", (req, res) => {
  const name = req.body.senderName;
  const email = req.body.senderMail;
  const url = req.body.fileUrl;
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "ritvikshukla261@gmail.com",
      pass: "",
    },
  });
  const mailOptions = {
    from: "ritvikshukla261@gmail.com",
    to: email,
    subject: "Shareongo",
    text: `Hi ${name},\n\nYou have received a file from Shareongo.\n\nClick on the link below to download the file.\n\n${url}\n\nRegards,\nShareongo`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
  res.json({
    message: "Email sent",
  });
});

router.get("/files/:name",(req,res)=>{
  console.log(req);
  const fileName = req.params.name;
  res.render("download",{ fileUrl: __dirname + "/uploads/" + fileName});
});


module.exports = router;
