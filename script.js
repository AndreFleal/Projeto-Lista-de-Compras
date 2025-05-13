const input = document.getElementById("tarefaInput");
const button = document.getElementById("adicionarBtn");
const ul = document.getElementById("listaTarefas");

button.addEventListener("click", function () {
  const tarefa = input.value.trim();

  if (tarefa === "") {
    alert("Digite um item para a compra");
    return;
  }

  const li = document.createElement("li");
  li.textContent = tarefa;

  const lixeira = document.createElement("span");
  lixeira.textContent = "🗑️";
  lixeira.classList.add("delete-icon");

  lixeira.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.addEventListener("click", () => {
    li.classList.toggle("comprado");
  });

  li.appendChild(lixeira);
  ul.appendChild(li);

  input.value = "";
  input.focus();
});
