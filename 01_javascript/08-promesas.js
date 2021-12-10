const fs = require('fs')

function esPar(numero) {
    return new Promise(
        (resolve, reject) => {
            if (numero % 2 === 0) {
                resolve(numero)
            } else {
                reject("No es par")
            }
        }
    )
}

function promesaElevarAlCuadrado(numero) {
    return new Promise(
        (resolve, reject) => {
            const numerElevar = Math.pow(numero, 2)
            resolve(numero)
        }
    )
}
