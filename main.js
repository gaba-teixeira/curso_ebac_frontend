let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let numeroUmInput = document.getElementById("valor-a");
  let numeroDoisInput = document.getElementById("valor-b");

  let valorA = parseFloat(numeroUmInput.value);
  let valorB = parseFloat(numeroDoisInput.value);

  let tudoCerto = document.querySelector(".tudoCerto");
  let numInvalido = document.querySelector(".numInvalido");

  if (valorA < valorB) {
    tudoCerto.innerHTML = `Parabens! Número A: <b>${valorA}</b> é menor que Número B: <b>${valorB}</b>!`;
    tudoCerto.style.display = "block";
    numInvalido.style.display = "none";
    numeroUmInput.value = "";
    numeroDoisInput.value = "";
  } else {
    numInvalido.innerHTML = "Errado! O número A deve ser menor que o Número B!";
    tudoCerto.style.display = "none";
    numInvalido.style.display = "block";

    numeroUmInput.value = "";
    numeroDoisInput.value = "";
  }
});
