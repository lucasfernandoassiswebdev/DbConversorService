const express = require("express");
const router = express.Router();
const controller = require("../controllers/rcmsController");

router.get("/", controller.get);
router.get("/:id/:id_exercicio/:id_orgao", controller.getById);
router.get("/transfer/:id/:id_exercicio/:id_orgao", controller.updateRcms);
router.get("/mongo", controller.getFromMongo);

module.exports = router;