let contadorDeItens = 0;

const contador = document.querySelector(".contador");



const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", function () {

let itemDigitado = input.value;
if (itemDigitado === ""){
  return alert ("Digite um Item")
}

const itemDaLista = document.createElement("li");

itemDaLista.innerText = itemDigitado;

ul.appendChild(itemDaLista);

contadorDeItens++;
contador.innerText = contadorDeItens;
input.value = "";

});
