function calcularMedia(nota1, nota2, nota3) {
    let media = 0;
    let resultado = "";
    
    media = (nota1 + nota2 + nota3) / 3;
    
    if (media >= 7) {
        resultado = "Aprovado";
        
    } else if (media >= 5 && media < 7) {
        resultado = "de Recuperação";

    } else {
        resultado = "reprovado";

    }
    
    console.log(`Sua nota é ${media.toFixed(2)}, você está ${resultado}`);
}

calcularMedia(5, 8, 7);
