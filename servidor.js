const express = require("express");

const app = express();
app.use(express.json());

let alunos = [
    {id: 1, nome: "Malu", curso: "Desenvolvimento de Sistemas"},
    {id: 2, nome: "Kemily", curso: "Redes de computadores"},
    {id: 3, nome: "Kaue", curso: "Banco de dados"},
    {id: 4, nome: "Rian", curso: "Administração"},
    {id: 5, nome: "Uendel", curso: "Desenvolvimento de Sistemas"},
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

       if(!nome || !curso){
        return res.status(400).json({msg: "Nome e curso são obrigatórios."});
       }

       const id = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1;

       const novoAluno = {
        id : id,
        nome : nome,
        curso : curso,
       }

       alunos.push(novoAluno);

       res.status(201).json({msg: "Aluno cadastrado com sucesso."});

});

app.get("/alunos/:valor", (req, res) => {
    const valor = req.params.valor;
    const aluno = alunos.find((aluno) => aluno.id == valor || aluno.nome == valor);

    res.status(200).json(aluno);
});

app.put("alunos/:valor", (req, res) =>{
    const valor = req.params.id;
    const {nome, curso} = req.body;

    if(!nome || !curso){
        return res.status(400).json({msg: "Nome e curso são obrigatórios."});
    }
})

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso.");
    console.log(`http://localhost:${PORTA}`);
})