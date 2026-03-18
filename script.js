function calcularMedia(n1, n2, n3, n4) {
    // Colocamos as notas em um array para poder usar sort e splice
    let notas = [n1, n2, n3, n4];
    
    let mediaNotas = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
    console.log("Média inicial: " + mediaNotas.toFixed(2));
 
    if (mediaNotas >= 7) {
        console.log("Você está aprovado!");
    } else {
        console.log("Você está de recuperação");
 
        let nrec = parseFloat(prompt("Digite sua nota da recuperação:"));
        
        notas.sort((a, b) => a - b); 

        if (nrec > notas[0]) {
            console.log(`Substituindo a nota ${notas[0]} por ${nrec}`);
            notas.splice(0, 1, nrec); // Remove a menor e coloca a da recuperação
        }

        mediaNotas = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
        console.log("Nova média após recuperação: " + mediaNotas.toFixed(2));

        if (mediaNotas >= 7) {
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
