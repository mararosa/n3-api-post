const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")
const bodyParser = require('body-parser')

router.get("/", controller.getAll) // eh a rota contatos
router.post("/criar", bodyParser.json(), controller.add)

module.exports = router
