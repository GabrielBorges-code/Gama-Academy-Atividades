const livros = require('./database');

// pegar um input por categoria
const readline = require('readline-sync');

const entradaInicial = readline.question("Deseja buscar um livro? [S/N] ");

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: \n')
    
   livros.forEach(livro => console.log(`${livro.categoria}`))

   const entradaCategoria = readline.question('\nQual categoria você escolhe? ');

   const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

   console.table(retorno)
} else {
    console.log('Essas são todos os livros disponiveis: \n')
    const ordemLivros = livros.sort((a,b) => a.paginas - b.paginas)
    console.table(ordemLivros);
}