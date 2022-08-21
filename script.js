document.querySelector("button.light-mode").style.display = "none";

var butao_dark = document.querySelector("button.dark-mode");
var butao_light =  document.querySelector("button.light-mode");
var cor_tecla = document.querySelector("div.cor-tecla");
var tela = document.querySelector("div.tela");

function darkMode () {
    cor_tecla.style.background = "#051933";
    butao_dark.style.display = "none";
    butao_light.style.display = "block";

}

function lightMode () {
    butao_light.style.background = "#051933";
    butao_light.style.border = "2px solid #00c86f";
    cor_tecla.style.background = "#00c86f";
    butao_light.style.display = "none";
    butao_dark.style.display = "block";

}


function apagarTudo () {
    tela.innerHTML = "";

}

function numero (elmt) {
    var valor = elmt.innerText;
    tela.innerHTML += "<p>" + valor + "</p>";

}

function operacao (elmt) {
    var operacao = elmt.innerText;
    tela.innerHTML += " <p> " + operacao + " </p> ";

}

function calcular() {
    var valor_digitado = tela.innerText;
    var valor_digitado_e_operacao = [valor_digitado.split(" ")];
    var valor_digitado_1 = parseFloat(valor_digitado_e_operacao[0][0]);
    var operacao = valor_digitado_e_operacao[0][1];
    var valor_digitado_2 = parseFloat(valor_digitado_e_operacao[0][2]);
    var resultado;

    if (operacao == "*") {
        resultado = valor_digitado_1 * valor_digitado_2;

    } else if (operacao == "/") {
        resultado = valor_digitado_1 / valor_digitado_2;
        resultado = resultado.toFixed(2);

    } else if (operacao == "-") {
        resultado = valor_digitado_1 - valor_digitado_2;

    } else if (operacao == "+") {
        resultado = valor_digitado_1 + valor_digitado_2;

    }

    if (isNaN(resultado)) {
        resultado = " <p class='resultado-erro'> Valor digitado inválido </p> ";
    }

    tela.innerHTML = " <p class='resultado'> " + resultado + " </p> ";

}
