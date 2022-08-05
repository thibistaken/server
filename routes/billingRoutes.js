const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const amount = 500;
    const charge = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      source: req.body.id,
      description: "My First Test Charge",
    });

    console.log("charge", charge);

    req.user.credits += amount / 100;

    const user = await req.user.save();
    res.send(user);
  });

  // app.get("/api/credits", requireLogin, async (req, res) => {
  //   console.log("req.user", req.user);
  //   res.send({ body: "HELLO" });
  // });
};
