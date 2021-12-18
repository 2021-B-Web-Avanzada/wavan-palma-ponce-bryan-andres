const fs = require('fs');

const escribirArchivo = (datos) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile('./ejem.txt',
                JSON.stringify(datos, null, '\t'),
                'utf-8',
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        console.log('Acción realizada con exito')
                        resolve();
                    }
                })
        }
    )
}
module.exports = {escribirArchivo}