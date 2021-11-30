const fs = require('fs')
console.log('Primero')

fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error, content) => {
        console.log("Segundo 1: " + content)
        fs.readFile(
            './06-ejemplo.txt',
            'utf-8',
            (error, content) => {
                console.log("Segundo 2: " + content)

            }
        )
    }
)

console.log("Tercero")

