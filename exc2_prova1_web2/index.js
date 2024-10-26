const express = require("express");
const path = require("path");
const app = express();

app.set('views', path.join(__dirname,('views')));
app.set('view engine', 'ejs');

port = 8080;

const perimetroRetangulo = (lado1, lado2)=>{
    return (2*(lado1*lado2));
}
const perimetroTriangulo = (lado1, lado2, lado3)=>{
    return (lado1+lado2+lado3);
}

app.get("/", (req, res)=>{

    res.send('Passe uma figura geométrica válida na rota. Por favor, escolha "retangulo" ou "triangulo".');
});

app.get("/:figuraGeometrica", (req, res)=>{
    figura = req.params.figuraGeometrica;
    
    if (figura !== 'retangulo' && figura !== 'triangulo') {
        
        res.send('Figura geométrica inválida. Por favor, escolha "retangulo" ou "triangulo".');
    }if(figura == 'retangulo'){
        lado1 = parseInt(req.query.lado1);
        lado2 = parseInt(req.query.lado2);

        result = perimetroRetangulo(lado1, lado2);
    }if(figura == 'triangulo'){
        lado1 = parseInt(req.query.lado1);
        lado2 = parseInt(req.query.lado2);
        lado3 = parseInt(req.query.lado3);

        result = perimetroTriangulo(lado1, lado2, lado3);
    }

    res.render("resposta.ejs", {result, figura});
});

app.get("/:figuraGeometrica/result", (req, res)=>{
    result = req.query.result;
    if(figura == 'retangulo'){
        lado1 = parseInt(req.query.lado1);
        lado2 = parseInt(req.query.lado2);

        result = perimetroRetangulo(lado1, lado2);
    }if(figura == 'triangulo'){
        lado1 = parseInt(req.query.lado1);
        lado2 = parseInt(req.query.lado2);
        lado3 = parseInt(req.query.lado3);

        result = perimetroTriangulo(lado1, lado2, lado3);
    }
    res.render("result.ejs", {result})
});

app.listen(port, ()=>{
    console.log("Working in "+port);
})