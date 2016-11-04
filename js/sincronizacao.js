

// Retornar os cartoes salvos no servidor

(function(){

var usuario = "th.antunes10@gmail.com";

$.getJSON(
    "https://ceep.herokuapp.com/cartoes/carregar?callback=?",{usuario: usuario},
    function(res){
        var cartoes = res.cartoes;
        console.log(cartoes.length + "carregados  em " + res.usuario);
        cartoes.forEach(function(cartao){
            controladorDeCartao.add(cartao.conteudo);
        });
    });

// Salvando cartão com Ajax

$("#sync") .click(function(){
  $(document).trigger("precisaSincronizar");
});

$(document).on("precisaSincronizar", function(){
    $("#sync") .removeClass("botaoSync--sincronizado");
    $("#sync") .addClass("botaoSync--esperando")
});

$(document).on("precisaSincronizar", function(){

    var cartoes = [];
      $(".cartao") .each(function(){
       var cartao = {};

      cartao.conteudo = $(this) .find(".cartao-conteudo").html();
      cartoes.push(cartao);
    });

   //escolha seu nome de usuario aqui

   var mural = {
       usuario:usuario
       ,cartoes:cartoes
   }

    $.ajax({
        url: "https://ceep.herokuapp.com/cartoes/salvar"
        ,method: "POST"
        ,data:mural
        ,success: function(res) {
            $("#sync").addClass("botaoSync--sincronizado");
            console.log(res.quantidade + " cartões salvos em" + res.usuario);
        }
        ,error: function(){
             $("#sync").addClass("botaoSync--deuRuim");
             console.log("Não foi possivel salvar no mural");
        }
        ,complete: function(){
            $("#sync").removeClass("botaoSync--esperando");
       }
    });

// Colocar o 8.3 aqui

});

})();
