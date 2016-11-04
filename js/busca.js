
//Criando um contador
var contador = $(".cartao").length;

// CAMPO DE BUSCA

$("#busca").on("input", function(event){

//guarda o valor digitado, removendo espaços extras.

var busca = $(this).val().trim();

   if (busca.length){

       $(".cartao").hide().filter(function(){
         return $(this) .find(".cartao-conteudo")
                               .text()
                               .match(new RegExp(busca, "i"));
                 }) .show();
    }else{
        $(".cartao").show();
    }
});
