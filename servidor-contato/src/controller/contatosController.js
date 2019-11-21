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
    return response.status(500).send(error)
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

const getByName = (request, response) => {
const nomeParam = request.params.nome
// const filtro = { nome: nomeparam}
const regex = new RegExp(nomeParam, 'i')
// const filtro ={ nome: /^t/i }
const filtro = { nome: regex }

contatosCollection.find(filtro, (error, contatos) => {
  if(error){
    return response.status(500).send(error)
  } else {
    if (contatos.length > 0){
return response.status(200).send(contatos)
    } else {
      return response.sendStatus(404)
    }
   
  }
})
}

const getById = (request, response) => {
  const idParam = request.params.id
  console.log(idParam)
  contatosCollection.findById(idParam, (error, contato) => {
    if(error) {
      return response.status(500).send(error)
    } else {
      if(contato){
        return response.status(200).send(contato)
      } else {
        return response.status(400).send("contato não encontrato")
      }
    }
  })
}
const deleteById = (request, response) => {
  const idParam = request.params.id
  contatosCollection.findByIdAndDelete(idParam, (error, contato) => {
    if(error) {
      return response.status(500).send(error)
    } else {
      if (contato) {
      return response.status(200).send('Contato deletado. Já era sistah')
      } else {
        return response.status(400).send("contato não encontrado")
      }
    }
  })
}


module.exports = {
  getAll,
  add,
  getByName,
  getById,
  deleteById
}

