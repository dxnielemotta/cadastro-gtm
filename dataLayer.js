// garante que o dataLayer existe
window.dataLayer = window.dataLayer || [];

function trackCadastroSubmit(formId) {
  window.dataLayer.push({
    event: "cadastro_submit",
    form_id: formId,
  });
}

function trackBotaoClick(buttonId) {
  window.dataLayer.push({
    event: "button_click",
    button_id: buttonId,
  });
}

function trackVideoInteraction(videoTitle) {
  window.dataLayer.push({
    event: "video_interaction",
    video_title: videoTitle,
  });
}
