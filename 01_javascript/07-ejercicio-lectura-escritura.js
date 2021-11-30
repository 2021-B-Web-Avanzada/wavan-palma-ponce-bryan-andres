const fs = require('fs');

function escribirArchivo(path, content) {
    fs.readFile(
        './06-ejemplo.txt',
        'utf-8',
        (error, oldContent) => {
            if (error) {
                console.log("error al leer")
            } else {
                content = oldContent + content + "\n"
                fs.writeFile(
                    './06-ejemplo.txt',
                    content,
                    (error, content) => {
                        if (error) {
                            console.log("error al escribir")
                        }
                    }
                )
            }
        }
    )
}

escribirArchivo(
    './06-ejemplo.txt',
    'Buenas Tardes'
)
