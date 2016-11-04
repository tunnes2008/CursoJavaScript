

// Botão ajuda

$("#ajuda").click(function(){
  $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",
      function(res){
          console.log(res);
             res.instrucoes.forEach(function(instrucao){
                controladorDeCartao.add(instrucao.conteudo, instrucao.cor);
             });
        }
     );
});
