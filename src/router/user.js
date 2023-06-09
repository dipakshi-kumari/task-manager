const express = require("express");
const route = express.Router();
const {userLogin, userRegistration} = require("../controller/user");

route.post("/login", userLogin);
route.post("/register", userRegistration);


module.exports = route;