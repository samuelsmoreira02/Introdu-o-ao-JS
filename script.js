console.log("Foi carregado!");

const titulo = document.getElementById("titulo");
titulo.textContent = "Título alterado pelo JavaScript!";

const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
  alert("Você clicou no botão!");
  });