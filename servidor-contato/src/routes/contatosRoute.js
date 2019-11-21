const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")
const bodyParser = require('body-parser')

router.get("/", controller.getAll) // eh a rota contatos
router.get("/nome/:nome", controller.getByName) //get por nome: rota "/contatos/nome/:nome"
router.get("/id/:id", controller.getById) //estou procurando por um paramentro e por isso o by
router.delete("/id/:id", controller.deleteById)
router.post("/criar", bodyParser.json(), controller.add)





module.exports = router
