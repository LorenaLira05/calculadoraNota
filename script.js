let n1 = 0.0; 
let n2 = 0.0;
let n3 = 0.0;
let n4 = 0.0;

function calcularMedia(){
    mediaNotas = (n1 + n2 + n3 + n4) / 4
    if(mediaNotas=> 7.0){
        console.log("Voce esta aprovado!")
    } else {
        let nrec;
        console.log("Voce esta de recuperacao")
        console.log("Digite sua nota da recuperacao")
        //nrec = input
        if(nrec=> 7.0){
            console.log("Voce esta aprovado")
        } else{
            let nfinal;
            console.log("Voce esta na final")
            console.log("Digite sua nota final")
            //nfinal = input
            if (nfinal=> 7.0){
                console.log("Voce esta aprovado")
            } else {
                console.log("Voce esta reprovado")
            }
        }
    }
}
