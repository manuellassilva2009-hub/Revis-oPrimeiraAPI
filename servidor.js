const express = require("express");

const app = express();
app.use(express.json());

let alunos = [
    {id: 1, nome: "Malu", curso: "Desenvolvimento de Sistemas"},
    {id: 2, nome: "Camily", curso: "Redes de computadores"},
    {id: 3, nome: "Kaue", curso: "Banco de dados"},
    {id: 4, nome: "Rian", curso: "Administração"},
    {id: 5, nome: "Manu", curso: "Desenvolvimento de Sistemas"},
]
app.get("/", (req, res) => {
  res.json({
    message: "API Alunos funcionando"
  });
});

app.get("/alunos", (req, res) => {
    res.json(alunos);
});

app.post("/alunos/cadastrar", (req, res) => {
        //console.log(req.body);
        const {nome, curso} = req.body;
       //console.log("nome: " + nome);
       //console.log(`curso: ${curso}`);

       const novoAluno = {
        nome : nome,
        curso : curso,
       }

       alunos.push(novoAluno);

       res.status(201).json({msg: "Aluno cadastrado com sucesso."});
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso.");
    console.log(`http://localhost:${PORTA}`);
})