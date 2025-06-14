document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const nameTrick = document.getElementById("nameTrick");
  const localTrick = document.getElementById("localTrick");
  const categoria = document.getElementById("categoria");
  const dificuldade = document.getElementById("dificuldade");
  const listTricks = document.getElementById("listTricks");

  const updateColorSelect = (selectElement) => {
    if (selectElement.value === "Aprendido") {
      selectElement.style.background = "green";
      selectElement.style.color = "white";
    } else if (selectElement.value === "Em processo") {
      selectElement.style.background = "blue";
      selectElement.style.color = "white";
    } else if (selectElement.value === "Não aprendida") {
      selectElement.style.background = "red";
      selectElement.style.color = "white";
    } else {
      selectElement.style.background = "white";
      selectElement.style.color = "black";
    }
  };

  const updateLevel = (level) => {
    const text = level.textContent.toLowerCase();
    if (text === "fácil") {
      level.style.background = "green";
      level.style.color = "white";
    } else if (text === "média") {
      level.style.background = "yellow";
      level.style.color = "black";
    } else if (text === "díficil") {
      level.style.background = "red";
      level.style.color = "white";
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      nameTrick.value.trim() &&
      localTrick.value.trim() &&
      categoria.value &&
      dificuldade.value
    ) {
      const cardTrick = document.createElement("div");
      cardTrick.classList.add("trick-card");

      cardTrick.innerHTML = `
          <h3>${nameTrick.value.trim()}</h3>
           <p><strong>Local:</strong> ${localTrick.value.trim()} </p>
           <p><strong>Categoria:</strong> ${categoria.value} </p>
          <div class="container-card">
            <div class="cardStatus">
              <p class="dificult">${dificuldade.value}</p>
                <select id="status-select">
                  <option value="selecione">Selecione o status</option>
                  <option value="Aprendido">Aprendido</option>
                  <option value="Em processo">Em processo</option>
                  <option value="Não aprendida">Não aprendida</option>
                </select>
            </div>
            <div class="card-actions">
                  <span class="material-icons edit-btn">edit</span>
                  <span class="material-icons delete-btn">delete</span>
              </div>
          </div>
        `;

      const statusSelect = cardTrick.querySelector("#status-select");
      updateColorSelect(statusSelect);
      statusSelect.addEventListener("change", () =>
        updateColorSelect(statusSelect)
      );

      const levelSelect = cardTrick.querySelector(".dificult");
      updateLevel(levelSelect);

      const btnDelete = cardTrick.querySelector(".delete-btn");
      btnDelete.addEventListener("click", () => {
        if (true) {
          confirm("Deseja excluir sua trick ?");
          cardTrick.remove();
        }
      });

      listTricks.appendChild(cardTrick);
      alert("Trick nova adicionada com sucesso !");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
