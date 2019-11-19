const contatosCollection = require("../model/contatoSchema");

// implementar o metodo getAll usando o mongodb
const getAll = (request, response) => {
  contatosCollection.find((error, contatos) => {
    if(error){
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })
};

const add = (request, response) => {
  //objeto json
const contatoDoBody = request.body
// criandoo um novo objeto para coleção com base nos parametros que vieram do json
const contato = new contatosCollection(contatoDoBody)
contato.save((error) => {
  //if(error !== null && error !== undefined)
  if(error) { //se existe algum erro aqui retorno 400
    return response.status(400).send(error)
  } else {
    return response.status(201).send(contato)
  }
})
}

//  let contato = request.body;
//  let baseDados = model.agenda.contatos;
//  contato.id = Math.random().toString(36).substr(-8) //para gerar um numero "automatico" no ID

//  if (baseDados.find(dado => dado.nome === contato.nome)) {
//     response.status(400).send("Contato já cadastrado");
//  }
// else {
//   model.agenda.contatos.push(contato) //push é um método de uma array fornece um objeto que tem uma agenda dentro
//   response.status(200).send()

// }




module.exports = {
  getAll,
  add
}

