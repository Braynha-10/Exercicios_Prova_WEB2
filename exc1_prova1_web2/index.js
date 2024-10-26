const express = require("express");
const path = require("path");
const app = express();

app.set('views', path.join(__dirname, ('views')));
app.set('view engine', 'ejs');

port = 8080;

const verifyCousin = (param)=>{
    if((param%param==0) && (param%1==0)){
        return true;
    }if(param == 2){
        return true;
    }else{
        return false;
    }
}

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/resposta", (req, res)=>{
    number = parseInt(req.query.number);

    if(!isNaN(number)){
        result = verifyCousin(number);
        res.render("resposta.ejs", {number, result});
    }else{
        res.send({message:"error 404"});
    }
});

app.listen(port, ()=>{
    console.log("Working at "+port);
});