const pessoa = {
    nome: "Gabriel",
    idade: 24,
    cidade: "Brasília"
}

//notação de ponto
console.log(pessoa.nome)
console.log(pessoa["idade"])

//desestruturar objetos. Acessando objeto pessoa
const {nome, idade, cidade } = pessoa

console.log(cidade)