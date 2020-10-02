// Path  and Middleware Requirement for Node
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Export Routes for Users Signup Page/Home Page
module.exports = function(app) {
  app.get("/signup", (req, res) => {
    
    if (req.user) {
      res.redirect("/members");
      
    }
   
  res.render ("/signup", {
  style:'style3.css',
  })
  });

  // Export Routes for Users Login Page
  app.get("/login", (req, res) => {
    
    if (req.user) {
      res.redirect("/members");
    }
    res.render ("login", {
      style:'style4.css',
      })
  });

  // Export Routes for Users Members Page
  app.get("/members", isAuthenticated, (req, res) => {
    
    if (!req.user) {
      res.redirect("/members");

    }
    res.render ("members", {
      style:'style.css',
      })
  });


};
