const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Olá mundo!");
});


app.listen(8080 ,function(erro){
    if (erro){
        console.log(erro);
    }else{
        console.log("Rodando com Sucesso!");
    }
});