const express = require("express");
const router = express.Router();


const { create, deleteTsk, updateTsk, readTsk } = require("../controllers/crudOps");



router.delete("/delete/:id", deleteTsk);
router.put("/update/:id", updateTsk);
router.post("/create", create);
router.get("/readTsk", readTsk)

module.exports = router;
