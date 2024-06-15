const express = require("express");
const app = express();

app.get("/home",function(req,res){
    res.send("Olá mundo!");
});


app.get("/questionario", function(req,res){
    res.send("Aqui é a tela de questionários.");
});

app.get("/resposta", function(req,res){
    res.send("Aqui é a tela de respostas.");
});



app.listen(8080 ,function(erro){
    if (erro){
        console.log(erro);
    }else{
        console.log("Rodando com Sucesso!");
    }
});