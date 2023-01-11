const express = require('express');
const app = express();
const port = 8091;
const db = require('./models/db');

app.get("/", async (req,res) =>{
    res.send("Página inicial");
});

app.post("/cadastrar", async(req,res)=>{
    res.send("Página cadastrar")
})

app.listen(port,()=> {
    console.log(`Servidor rodando na porta : http://localhost:${port}`);
});