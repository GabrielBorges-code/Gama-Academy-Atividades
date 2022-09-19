const alunas = ["Paula", "Maria", "Estela", "Clara"];

alunas.map(aluna => console.log(aluna));

const numeros = [90, 98, 20, 7, 100];

const numerosPares = numeros.filter(numero => numero % 2 == 0);
const numerosImpares = numeros.filter(numero => numero % 2 != 0);

console.log(numerosPares)
console.log(numerosImpares)

const carros = ["Gol", "Uno", "Renegade", "I30"];

const carroEncontrado = carros.find(carro => carro == "Uno");

console.log(carroEncontrado);

const listaNome = ["Ana", "Zira", "Weverton", "Debora"];
const listaNum = [110, 33, 4, 12, 7];

const ordenaNome = listaNome.sort();
console.log(ordenaNome);

const ordenaNum1 = listaNum.sort();
console.log(ordenaNum1);

const ordenaNum2 = listaNum.sort((a,b) => a-b);
console.log(ordenaNum2);

const ordenaNum3 = listaNum.sort((a,b) => b-a);
console.log(ordenaNum3);

const numbers = [1, 34, 35, 44];

const soma = numbers.reduce((valorAtual, valorAnterior) => {
    return valorAnterior + valorAtual;
})

console.log(soma);

