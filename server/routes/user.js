const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { getUsersData, addIncome, addExpense } = require("../controllers/users");

router.route("/").get(getUsersData);
router.route("/addIncome").put(addIncome);
router.route("/addExpense").put(addExpense);

module.exports = router;