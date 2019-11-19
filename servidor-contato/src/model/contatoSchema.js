const mongoose = require("mongoose"); // vai dizer como vai ser o formato dos nossos dados. Faz uma validação
const Schema = mongoose.Schema;

const contatoSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, // tipo dos dados
    auto: true, // é autogerado
    required: true // é obrigatorio
  },
  nome: {
    type: String,
    required: true,
    unique: true
  },
  celular: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: Date,
    required: true
  }
});

//cria um obj de coleçao com todos os metodos
const contatosCollection = mongoose.model("contato", contatoSchema);

module.exports = contatosCollection;
