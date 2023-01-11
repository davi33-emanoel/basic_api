const express = require('express');
const routes = express();
const User = require('../models/User');

routes.use(express.json());

routes.get("/", async (req,res) =>{
    res.send("Página inicial");
});

routes.post("/cadastrar", async (req,res)=>{
    await User.create(req.body)
     .then(()=>{
         return res.json({
             erro: false,
             mensagem:"Usuário cadastrado com sucesso!"
         });
     }).catch(()=>{
         return res.status(400).json({
             erro: true,
             mensagem:"Usuário não cadastrado com sucesso!"
         });
     })
 })
 
 module.exports = routes;