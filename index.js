const express = require("express")
const jsonParser = require("body-parser");
const { response } = require("express");

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

    server.post("/usuarios", jsonParser, (req, res) => {
        console.log(req.body)
        const novoUsuario = req.body
        usuarios.push(novoUsuario)
        res.send(usuarios)
         })

         server.delete("/usuarios/:index", (req,res) =>{
             const {index} = req.params
             usuarios.splice(index, 1)
             res.send(usuarios)
         })
    console.log("Servidor rodando")

server.listen(3000)
