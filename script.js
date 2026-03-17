function calcularMedia(n1, n2, n3, n4) {
    let mediaNotas = (n1 + n2 + n3 + n4) / 4;
    console.log("Média inicial: " + mediaNotas.toFixed(2));
 
    if (mediaNotas >= 7) {
        console.log("Você está aprovado!");
    } else {
        console.log("Você está de recuperação");
 
        let nrec = parseFloat(prompt("Digite sua nota da recuperação:"));
 
        if (nrec >= 7) {
            console.log("Você está aprovado!");
        } else {
            console.log("Você está na final");
 
            let nfinal = parseFloat(prompt("Digite sua nota final:"));
 
            if (nfinal >= 7) {
                console.log("Você está aprovado!");
            } else {
                console.log("Você está reprovado!");
            }
        }
    }
}
 
calcularMedia(5, 10, 10, 10);
