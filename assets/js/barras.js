document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".animacao");

  function slide() {
    const firstBarra = container.firstElementChild;

    // Adiciona a classe para animação de saída
    firstBarra.classList.add("sair");

    // Após o tempo da animação, remove e reposiciona o elemento
    setTimeout(() => {
      firstBarra.classList.remove("sair");
      firstBarra.classList.add("entrar");
      container.appendChild(firstBarra); // Reposiciona o elemento no final
      setTimeout(() => firstBarra.classList.remove("entrar"), 10); // Garante a restauração da classe
    }, 500); // Tempo da transição (deve coincidir com o CSS)
  }

  // Iniciar o loop
  setInterval(slide, 2000); // Chama a função a cada 2 segundos
});
