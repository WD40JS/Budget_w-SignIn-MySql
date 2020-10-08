// NPM Packages Information
const express = require("express");
const session = require("express-session");

// Passort Information
const passport = require("./config/passport");
const exphbs = require("express-handlebars");

// Port Reader Information
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Express Authentication Data Information
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// User Data Tracker Information
app.use(
session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
const hbs = exphbs.create({
helpers: {
format_date: (date) => {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
},
},
});

// Handlebars Information
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Sequelize to Port and Mysql Information
db.sequelize.sync({force:false}).then(() => {
app.listen(PORT, () => {
console.log(
  "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
  PORT,
  PORT
);
});
});
