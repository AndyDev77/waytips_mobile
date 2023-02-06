const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Andy77550:Andy77550@cluster0.rxgipvx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

//
require("dotenv").config();
//

router.post("/themes", (req, res) => {
  console.log("Envoyé par le client les themes suivants - ", req.body);
  const { email, themes } = req.body;
  if (!themes) {
    return res
      .status(422)
      .json({ error: "Merci de séléctionner au moins un theme" });
  }

  User.findOne({ email: email }).then(async (savedUser) => {
    if (savedUser) {
      const valuesThemes = req.body.values;
      res.send({
        message: "Values received successfully",
        valuesThemes,
      });
    }

    const user = new User({
        email,
        themes,
      });
  });
});

module.exports = router;
