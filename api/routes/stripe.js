const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.paymentIntents.create(
    {
      // source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
      payment_method: "pm_card_visa",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

// const dotenv = require("dotenv").config();
// const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/payment", (req, res) => {
//   stripe.paymentIntents
//     .create({
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: "usd",
//     })
//     .then((stripeRes) => {
//       res.status(200).json(stripeRes);
//     })
//     .catch((stripeError) => {
//       console.log(stripeError);
//       res.status(500).json(stripeError);
//     });
// });

// module.exports = router;
