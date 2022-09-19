// Fizzbuzz
let resultado = "";

function fizzBuzz(entrada) {
    
    if(typeof entrada !== 'number') {
        return resultado = "Não é um número"
    }

    if(entrada % 5 == 0 && entrada % 3 == 0) {
        return resultado = "FizzBuzz"
    
    }else if (entrada % 5 == 0) {
        return resultado = "Buzz"

    } else if (entrada % 3 == 0 ) {
        return resultado = "Fizz"

    } 

    return resultado = entrada

}

console.log(fizzBuzz())