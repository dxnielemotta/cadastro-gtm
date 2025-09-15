document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");
  const mensagem = document.getElementById("mensagem");
  const btn = document.querySelector(".btn");
  const videoElement = document.getElementById("ytb-video");
  const videoTitle = videoElement.getAttribute("title");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let sucesso = true;

      trackCadastroSubmit("cadastroForm");

      if (sucesso) {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        form.reset();
      } else {
        mensagem.textContent = "Erro ao realizar cadastro.";
      }
    });
  }
  if (btn) {
    btn.addEventListener("click", function () {
      trackBotaoClick("btn-cadastrar");
    });
  }
  
});

