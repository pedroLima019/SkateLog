document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const nameTrick = document.getElementById("nameTrick");
  const localTrick = document.getElementById("localTrick");
  const categoria = document.getElementById("categoria");
  const dificuldade = document.getElementById("dificuldade");
  const status = document.getElementById("status");
  const listTricks = document.getElementById("listTricks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      nameTrick.value.trim() &&
      localTrick.value.trim() &&
      categoria.value &&
      dificuldade.value &&
      status.value
    ) {
      const cardTrick = document.createElement("div");
      cardTrick.classList.add("trick-card");

      cardTrick.innerHTML = `
          <h3>${nameTrick.value.trim()}</h3>
           <p><strong>Local:</strong>${localTrick.value.trim()}</p>
           <p><strong>Categoria:</strong>${categoria.value}</p>
          <div class="cardStatus">
            <p class="dificult">${dificuldade.value}</p>
            <p class="status">${status.value}</p>
          </div>
        `;

      listTricks.appendChild(cardTrick);

      alert("Trick nova adicionada com sucesso !");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
