let cep = document.querySelector('#cep');
let endereco = document.querySelector('.endereco');
let excluir = document.querySelector('#excluir');

cep.addEventListener('focusout', (e) => {
    e.preventDefault();
    buscaCep(cep.value);
});

excluir.addEventListener('click', () => {
    endereco.innerHTML = "";
})

function buscaCep (cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((dados) => {
        endereco.innerHTML = `
            <p>Bairro: ${dados.bairro}</p>
            <p>CEP: ${dados.cep}</p>
            <p>Logradouro: ${dados.logradouro}</p>
            <p>Complemento: ${dados.complemento}</p>
            <p>Bairro: ${dados.bairro}</p>
            <p>Localidade: ${dados.localidade}</p>
            <p>UF: ${dados.uf}</p>
            <p>IBGE: ${dados.ibge}</p>
            <p>GIA: ${dados.gia}</p>
            <p>DDD: ${dados.ddd}</p>
            <p>SIAFI: ${dados.siafi}</p>
        `
    })
    .catch((erro) => {
        endereco.innerHTML =  `Digite um CEP válido. ${erro}`
    })
}
