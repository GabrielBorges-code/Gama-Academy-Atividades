function calculaIdade(idade) {
    // if padrão
    // if (idade >= 18) {
    //     return "Maior de idade";
    // } else {
    //     return "Menor de idade";
    // }

    // operador ternario
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(calculaIdade(18));