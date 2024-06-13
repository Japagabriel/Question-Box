const express = require("express");
const App = express();


App.listen(8080 ,function(erro){
    if (erro){
        console.log(erro);
    }else{
        console.log("Rodando com Sucesso!");
    }
});