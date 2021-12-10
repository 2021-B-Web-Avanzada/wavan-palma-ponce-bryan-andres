const inquirer = require('inquirer');
const fs = require("fs");

async function main() {
    try {
        const response = await inquirer
            .prompt(
                [
                    {
                        type: 'input',
                        name: 'apellido',
                        message: 'Ingresa Tu Nombre'
                    },
                    {
                        type: 'input',
                        name: 'edad',
                        message: 'Ingresa tu Edad'
                    }
                ]
            )
        new Promise(
            (resolve, reject) => {
                fs.writeFile(
                    './ejem.txt',
                    JSON.stringify(response, null, 2),
                    'utf-8',
                    (error_escritura) => {
                        if (error_escritura) {
                            reject(error_escritura);
                        } else {
                            console.log('Archivo escrito')
                            resolve();
                        }
                    })
            }

        )
        new Promise(
            (resolve, reject) => {
                fs.readFile(
                    './ejem.txt',
                    'utf-8',
                    (error_escritura,content) => {
                        if (error_escritura) {
                            reject(error_escritura);
                        } else {
                            console.log(JSON.parse(content))
                            resolve();
                        }
                    })
            }
        )
    } catch (e) {
        console.error(e)
    }
}


main().then(() => "")