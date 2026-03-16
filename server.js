import express from "express"
const app = express()

app.use(express.json())

let usuarios = [

    { id: 1, nome: "Thiago", email: "thiagosouzin@gmail.com" },
    { id: 2, nome: "Ricardo", email: "ricardotavaresgo@gmail.com" }

]


app.get("/", (req, res) => {
    res.json({mensagem: "API Está funcionando corretamente"})
})

app.get("/usuarios", (req, res) => {
    res.json(usuarios)
})


app.get("/usuarios/:id", (req, res) => {
const id = parseInt(req.params.id);
const usuario = usuarios.find(u => u.id === id)

if(!usuario){
    return res.status(404).json({mensagem: "O usuario não foi encontrado"})
}

res.json(usuario)
})

app.post("/usuarios", (req, res) =>{
const {nome, email} = req.body;

if(!nome || !email){
    return res.status(400).json({mnesagem:"Nome e Email Obrigatorio"})
}

const novoUsuario = {
id:usuarios.length + 1,
nome,
email
}

usuarios.push(novoUsuario);
res.status(201).json(novoUsuario);
});

app.put("/usuarios/:id", (req, res) => {
const id = parseInt(req.params.id)
const {nome, email} = req.body
const usuario = usuarios.find(u => u.id === id)

if(!usuario){
    res.status(400).json({mensagem:"Ususuario não encontrado"})

}
usuario.nome = nome || usuario.nome
usuario.email= email || usuario.email

req.json(usuario)
})

app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);
  
    if (index === -1) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }
  
    const removido = usuarios.splice(index, 1);
    res.json({ mensagem: 'Usuário removido com sucesso', usuario: removido[0] });
  });

app.listen(3000)