document.addEventListener("DOMContentLoaded", function () {
    let botão = document.querySelector("#botão");
    let mensagem = document.querySelector("#mensagem");
    let youtubeButton = document.querySelector("#youtubeButton");

    botão.addEventListener("click", ApareceMensagem);

    youtubeButton.addEventListener("click", function () {
        window.location.href = "https://www.youtube.com";
    });

    function ApareceMensagem() {
       mensagem.textContent = "Não pare quando estiver cansado, pare quando já estiver feito."
       mensagem.style.marginTop = "0px"
       mensagem.style.fontWeight  = "bold"
    }

});
