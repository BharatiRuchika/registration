const mongo = require("../mongo");
const express = require("express");
const router = express.Router();
const {db} = require("../mongo");
const service = require("../services/register.service");
router.post("/register",service.register);
router.post("/login",service.login);
// router.put("/:id",service.update);
// router.delete("/:id",service.delete);
module.exports = router;
