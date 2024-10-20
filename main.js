const form = document.getElementById("formulario");
let linhas = "";
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>';

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputAtividade = document.getElementById("form-atividade");
  const inputNota = document.getElementById("form-nota");

  let linha = "<tr>";
  linha += `<td>${inputAtividade.value}</td>`;
  linha += `<td>${inputNota.value}</td>`;
  linha += `<td>${inputNota.value >= 7 ? imgAprovado : imgReprovado} </td>`;
  linha += "</tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputAtividade.value = "";
  inputNota.value = "";
});
