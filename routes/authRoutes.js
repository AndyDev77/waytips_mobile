const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");

//
require("dotenv").config();
//

router.post("/signup", (req, res) => {
  //   res.send("Ceci est la page d'inscription");
  console.log("Sent by client - ", req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(422)
      .json({ error: "Merci de compléter tous les champs" });
  }

  User.findOne({ email: email }).then(async (savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "Coordonnées déjà existantes" });
    }
    const user = new User({
      name,
      email,
      password,
    });

    try {
      await user.save();
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.send({ token });
    } catch (err) {
      console.log(err);
    }
  });
});

module.exports = router;
