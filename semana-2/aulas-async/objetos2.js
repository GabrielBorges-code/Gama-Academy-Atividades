const filmes = [
    {
        id: 1,
        nome: "Poderoso Chefão 1",
        descricao: "Filme de mafia",
        duracao: 180
    },
    {
        id: 2,
        nome: "Poderoso Chefão 2",
        descricao: "Filme de mafia 2",
        duracao: 200
    },
    {
        id: 3,
        nome: "Poderoso Chefão 3",
        descricao: "Filme de mafia 3",
        duracao: 250
    }
]

const [{id, nome, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme['nome']))