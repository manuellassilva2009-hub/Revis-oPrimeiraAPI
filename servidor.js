const express = require("express");

const app = express();

let ALUNOS = [
    { id: 1, nome: "Bernardo", curso: "Desenvolvimento de Sistemas" },
    { id: 2, nome: "Camily", curso: "Redes de computadores" },
    { id: 3, nome: "Kaue", curso: "Banco de Dados" },
    { id: 4, nome: "Maria", curso: "Administração" },
    { id: 5, nome: "Marjory", curso: "Desenvolvimento de Sistemas" }

];      

app.get("/",(req,res)=>{
    res.json({ALUNOS})
        mensagem: "API Alunos funcionando"
    })


const PORTA = 3000;
app.listen(PORTA,()=>{
     console.log("Servidor iniciado com sucesso");
     console.log(`http://localhost:${PORTA}`);

    })  

