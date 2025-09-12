// Garante que o dataLayer existe
window.dataLayer = window.dataLayer || [];

// Função para rastrear o submit do cadastro
function trackCadastroSubmit(formId) {
  window.dataLayer.push({
    event: "cadastro_submit",
    form_id: formId,
  });
}

// Função para rastrear o clique no botão
function trackBotaoClick(buttonId) {
  window.dataLayer.push({
    event: "button_click",
    button_id: buttonId,
  });
}
