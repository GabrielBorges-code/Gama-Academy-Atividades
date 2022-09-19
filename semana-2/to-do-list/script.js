let btnAdicionar = document.querySelector('#btnAdicionar');
let tarefa = document.querySelector('#iptTarefa');
let itemLista = document.querySelector('.itemLista');
// let excluir;
let checkbox = document.querySelector('.checkbox');

let atividades = [];
let meuArrayInvertido = [];

btnAdicionar.addEventListener('click', () => {
    atividades.push(tarefa.value)
    meuArrayInvertido = atividades.slice(0).reverse();
    
    itemLista.innerHTML = ''
    
    for(let i = 0; i < meuArrayInvertido.length; i++) {
        console.log(meuArrayInvertido[i])
        itemLista.innerHTML += `<li id='${i}'> <input class='checkbox' type='checkbox'> ${i} ${meuArrayInvertido[i]} <button class='excluir'>Excluir</button></li>`
    }
    // console.log(tarefa.value);
    tarefa.value = '';

    // excluir = document.querySelector('.excluir');
    // excluir.addEventListener('click', excluirTarefa)
})

// function excluirTarefa() {
//     console.log('tarefa excluida')
// }