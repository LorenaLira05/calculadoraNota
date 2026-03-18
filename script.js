function calcularMediaComSubstituicao(notas) {
    notas.sort((a, b) => a - b);
    console.log("Notas ordenadas:", notas);

    let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    console.log("Média inicial:", media.toFixed(2));

    if (media >= 7) {
        return console.log("Aprovado direto!");
    }

    console.log("Recuperação necessária.");
    let nrec = parseFloat(prompt("Digite a nota da recuperação:"));

    if (nrec > notas[0]) {
        console.log(`Substituindo a menor nota (${notas[0]}) por ${nrec}`);
        notas.splice(0, 1, nrec); // Remove 1 elemento no índice 0 e insere nrec
    }

    let novaMedia = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    console.log("Nova média após substituição:", novaMedia.toFixed(2));

    if (novaMedia >= 7) {
        console.log("Aprovado após recuperação!");
    } else {
        console.log("Reprovado ou Final (dependendo da regra).");
    }
}

calcularMediaComSubstituicao([5, 10, 10, 10]);
