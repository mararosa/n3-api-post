const express = require("express") // biblioteca por isso no require chamo apenas o express
const app = express()

const database = require('./model/database') // eh um documento e por isso coloco o nome da pasta, pq la na pasta model, vai ter o requerimento para o meu mongoose
database.connect()

//rotas
const index = require("./routes/index")
const contatos = require("./routes/contatosRoute")

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/contatos", contatos)

module.exports = app
