console.log('hello world');

// 1

// function contadorLetras(letra, frase) {
//     let cont = 0;
//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i] == letra) {
//             cont += 1;
//         }
//     }
//     return cont;
// }
// function contadorLetras() {
//     letra = prompt('ingrese letra')
//     frase = prompt('ingrese frase')
//     let cont = 0;
//     for (let i = 0; i < frase.length; i++) {
//         // letra = letra.toString();
//         // frase = frase.toString();
//         if (frase[i] == letra) {
//             cont++;
//         }
//     }
//     return cont;
// }
let contadorLetras = () => {
    letra = prompt('ingrese letra')
    frase = prompt('ingrese frase')
    let cont = 0;
    for (let i = 0; i < frase.length; i++) {
        // letra = letra.toString();
        // frase = frase.toString();
        frase[i] == letra && cont++;
    }
    return cont;
}


// 2

// function imparesDesde(n) {
//     for (let i = n; i < (n + 50); i++) {
//         if (i % 2 != 0) {
//             console.log(i)
//         }
//     }
// }
// function imparesDesde() {
//     n = Number.parseInt(prompt('ingrese un numero:'), 10)
//     for (let i = n; i <= (n + 50); i++) {
//         if (i % 2 != 0) {
//             console.log(i)
//         }
//     }
// }
let imparesDesde = () => {
    n = Number.parseInt(prompt('ingrese un numero:'), 10)
    for (let i = n; i <= (n + 50); i++) {
        i % 2 != 0 && console.log(i)
    }
}