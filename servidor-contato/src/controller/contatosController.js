const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {
 let contato = request.body;
 let baseDados = model.agenda.contatos;
 contato.id = Math.random().toString(36).substr(-8) //para gerar um numero "automatico" no ID

 if (baseDados.find(dado => dado.nome === contato.nome)) {
    response.status(400).send("Contato já cadastrado");
 }
else {
  model.agenda.contatos.push(contato) //push é um método de uma array fornece um objeto que tem uma agenda dentro
  response.status(200).send()

}
}



module.exports = {
  getAll,
  add
}

