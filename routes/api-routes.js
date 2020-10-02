// Model and Password Node Requirements
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
 
// Post Password Information Login
  app.post("/api/login", passport.authenticate("local"), (req, res) => {

    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

// Post Password Information Signup
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/signup");
      })
      .catch(err => {
        console.log("api signup error:");
        console.log(err);
        res.status(401).json(err);
      });
  });

  // Route for Logging User Out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/signup");
  });

  // Route for User Data
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
     
      res.json({});
    } else {
      
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
