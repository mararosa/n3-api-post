const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const getById = (request, response) => {
  const id = request.params.id;
  response.status(200).send(contatos.find(tarefa => tarefa.id == id));
};


const add = (request, response) => {

 model.agenda.contatos.push(request.body);
response.status(200).send()
}



module.exports = {
  getAll,
  getById,
  add
}

