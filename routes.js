const express = require("express");
const router = express.Router();

const { register, login } = require("./controllers/auth");
const { deleteTsk, update } = require("./controllers/crudOps")

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/deleteTsk").delete(deleteTsk);
router.route("/update/:id").post(update)


module.exports = router;
