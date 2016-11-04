var controladorDeCartao = (function(){
    "use strict";
    var contador = $(".cartao").length;



    function adicionaCartao(conteudo, cor){

        //soma de um contador
        contador++;



        //Cria atributo id

        var opcoes = criaOpcoesDoCartao(contador);

        var conteudoTag = $("<p>").addClass("cartao-conteudo")
                                  .append(conteudo);

        //Cria atributo id
        $("<div>").attr("id", "cartao_" + contador)
                  .addClass("cartao")
                  .append(opcoes)
                  .append(conteudoTag)
                  .css("background-color", cor)
                  .prependTo(".mural");


    }

     return {
            add: adicionaCartao,
            getContador: function(){
                return contador;
            },
            setContador:function(contador) {
                this.contador = contador;
            }
    }
})();
