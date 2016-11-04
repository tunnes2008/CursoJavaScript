var novoCartao = document.querySelector(".novoCartao");


novoCartao.addEventListener("submit", function(event) {
  event.preventDefault();

  var novoCartaoConteudo = document.querySelector(".novoCartao-conteudo");
  var elementError = document.querySelector (".error");
console.log(novoCartaoConteudo.value);
  if (novoCartaoConteudo.value == "" && elementError == null) {
      var msgErro = document.createElement("p");

      msgErro.textContent = "Preencha o texto acima";
      msgErro.classList.add("error");

      novoCartao.insertBefore(msgErro, document.querySelector(".novoCartao-botao"));
  };
});


(function(controlador){
"use string";

$(".novoCartao").submit(function(event) {
    var campoConteudo = $(".novoCartao-conteudo");
    var conteudo = campoConteudo.val().trim()
                                      .replace(/\n/g, "<br>")


    if (conteudo) {
        controlador.add(conteudo);
        $(document).trigger("precisaSincronizar");
    }

    campoConteudo.val("");
    event.preventDefault();

});
})(controladorDeCartao);
