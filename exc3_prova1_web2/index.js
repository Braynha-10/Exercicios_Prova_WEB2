const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.set('views', path.join(__dirname,('views')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

port = 8080;
const clientes = [];
const funcionarios = [];

app.get("/", (req, res)=>{
    res.render("index.ejs")
});

app.get("/:clientes/novo", (req, res)=>{
    individuo = req.params.clientes
    if (individuo !== 'clientes' && individuo !== 'funcionarios') {
        res.send('error 404');
        return;
    }
    res.render('cadastro.ejs', {individuo});
});

app.get("/:funcionarios/novo", (req, res)=>{
    individuo = req.params.funcionarios
    if (individuo !== 'clientes' && individuo !== 'funcionarios') {
        res.send('error 404');
        return;
    }
    res.render('cadastro.ejs', {individuo});
});

app.post('/clientes', (req, res) => {
    const novoCliente = {
        cpf: req.body.cpfC,
        nome: req.body.nomeC,
        idade: req.body.idadeC,
        endereco: req.body.enderecoC
    };
    
    clientes.push(novoCliente);
    res.redirect('/');
});

app.post('/funcionarios', (req, res) => {
    const novoFuncionario = {
        cpf: req.body.cpfF,
        nome: req.body.nomeF,
        idade: req.body.telefoneF,
        endereco: req.body.cargoF
    };
    
    funcionarios.push(novoFuncionario);
    res.redirect('/');
});

app.get('/clientes', (req, res) => {
    res.render('apresenta.ejs', { individuo: 'clientes', clientes });
});

app.get('/funcionarios', (req, res) => {
    res.render('apresenta.ejs', { individuo: 'funcionarios', funcionarios });
});

app.listen(port, ()=>{
    console.log("Working in "+port);
})