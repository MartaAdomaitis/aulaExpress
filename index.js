const express = require("express")

const server = express()

const usuarios = [{id:1, nome:"Marta", sobrenome:"Adomaitis"},
 {id:2, nome:"Kikinho", sobrenome:"Braga Adomaitis"}];

 server.get("/usuarios", (req, res) => {
     res.send(usuarios);
 });

server.get("/usuarios/:id", (req, res) => {

   const {id} = req.params
   
   const aux = usuarios.find((usuarios) => usuarios.id == id)

    res.send(aux)
    })

    console.log("Servidor rodando")

server.listen(3000)