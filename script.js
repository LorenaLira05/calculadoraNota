const btnResumo = document.getElementById("btnResumo");
const resultado = document.getElementById("resultado");
const erro = document.getElementById("erro");
const extraNotas = document.getElementById("extraNotas");

function toNum(id) {
  return parseFloat(document.getElementById(id).value);
}

function formatar(n) {
  return Number.isFinite(n) ? n.toFixed(2) : "-";
}

function validarNota(n) {
  return Number.isFinite(n) && n >= 0 && n <= 10;
}

function calcularResumo(n1, n2, n3, n4, nrec, nfinal) {
  const linhas = [];
  let notas = [n1, n2, n3, n4];

  let mediaNotas = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
  linhas.push("Média inicial: " + mediaNotas.toFixed(2));

  if (mediaNotas >= 7) {
    linhas.push("Você está aprovado!");
    return linhas;
  }

  linhas.push("Você está de recuperação.");

  if (!validarNota(nrec)) {
    linhas.push("Informe a nota de recuperação para continuar.");
    return linhas;
  }

  notas.sort((a, b) => a - b);

  if (nrec > notas[0]) {
    linhas.push(
      "Substituindo a nota " + notas[0].toFixed(2) + " por " + nrec.toFixed(2),
    );
    notas.splice(0, 1, nrec);
  } else {
    linhas.push("Nota de recuperação não substituiu a menor nota.");
  }

  mediaNotas = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
  linhas.push("Nova média após recuperação: " + mediaNotas.toFixed(2));

  if (mediaNotas >= 7) {
    linhas.push("Você está aprovado!");
    return linhas;
  }

  linhas.push("Você está na final.");

  if (!validarNota(nfinal)) {
    linhas.push("Informe a nota final para concluir.");
    return linhas;
  }

  if (nfinal >= 7) {
    linhas.push("Você está aprovado!");
  } else {
    linhas.push("Você está reprovado!");
  }

  return linhas;
}

btnResumo.addEventListener("click", () => {
  erro.textContent = "";
  extraNotas.style.display = "grid";

  const n1 = toNum("n1");
  const n2 = toNum("n2");
  const n3 = toNum("n3");
  const n4 = toNum("n4");
  const nrec = toNum("nrec");
  const nfinal = toNum("nfinal");

  if (![n1, n2, n3, n4].every(validarNota)) {
    erro.textContent = "As notas 1 a 4 devem estar entre 0 e 10.";
    return;
  }

  const linhas = calcularResumo(n1, n2, n3, n4, nrec, nfinal);

  resultado.textContent =
    "Notas informadas: [" +
    [n1, n2, n3, n4].map(formatar).join(", ") +
    "]\n\n" +
    linhas.join("\n");
});
