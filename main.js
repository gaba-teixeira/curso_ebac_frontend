const form = document.getElementById("formulario");
let linhas = "";
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';

const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarLinha();
  atualizarTabela();
  atualizarMedia();
});

function adicionarLinha() {
  const inputAtividade = document.getElementById("form-atividade");
  const inputNota = document.getElementById("form-nota");
  atividades.push(inputAtividade.value);
  notas.push(parseFloat(inputNota.value));

  let linha = "<tr>";
  linha += `<td>${inputAtividade.value}</td>`;
  linha += `<td>${inputNota.value}</td>`;
  linha += `<td>${inputNota.value >= 7 ? imgAprovado : imgReprovado} </td>`;
  linha += "</tr>";

  linhas += linha;
  inputAtividade.value = "";
  inputNota.value = "";
}

function atualizarTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizarMedia() {
  let mediaFinal = calcularMedia();
  document.getElementById("media-final").innerHTML = mediaFinal;
  document.getElementById("media-resultado").innerHTML =
    mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calcularMedia() {
  somaNotas = 0;

  for (i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }
  return somaNotas / notas.length;
}
