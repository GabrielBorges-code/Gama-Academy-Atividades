// Jeito Gabriel
// function reverseString(str) {
//     let arrayString = str.split('');
//     let tamanhoArray = arrayString.length;
//     let arrayStringInvertido = [];
    
//     for(let i = tamanhoArray; i >= 0; i--) {
//         arrayStringInvertido.push(arrayString[i])
                
//     }

//     for(let i = 1; i < arrayStringInvertido.length; i++) {
//         // console.log(i + " - " + arrayString[i])
//         console.log(i + " - " + arrayStringInvertido[i])
//     }


// }

// console.log(reverseString('Ola Gabriel'));

let newStr = '';

function reverseString(str) {
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr);
}

console.log(reverseString("Olá Gabriel"));