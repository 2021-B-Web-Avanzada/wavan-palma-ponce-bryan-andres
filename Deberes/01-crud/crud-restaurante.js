const inquirer = require("inquirer");
const fs = require("fs");
const ga = require('./gestion-archivos.js')

const ingresoRestaurant = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre del restaurant'
            },
            {
                type: 'input',
                name: 'fecha_apertura',
                message: 'Ingresa la fecha de apertura del restaurant'
            },
            {
                type: 'input',
                name: 'direccion',
                message: 'Ingresa la direccion del restaurant'
            },
            {
                type: 'input',
                name: 'estrellas',
                message: 'Ingresa el numero de estrellas del restaurant'
            },
            {
                type: 'input',
                name: 'categoria',
                message: 'Ingresa la categoria del restaurant'
            }
        ]
    )
}

async function crearRestaurante() {
    const restaurant = await ingresoRestaurant();
    restaurant.menu = []
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    jsonFile.push(restaurant)
    await ga.escribirArchivo(jsonFile)
}

async function listarRestaurantes() {
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.stringify(JSON.parse(fileContent), null, '    ')
    console.log(jsonFile)
}

async function actualizarRestaurante() {
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    let restaurantes = [];
    jsonFile.forEach(element => {
        restaurantes.push(element.nombre);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un Restaurante: ',
            choices: restaurantes,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre === seleccion.option) {
                return index
            }
        }
    )
    const restaurant = await ingresoRestaurant();
    let menuAux = jsonFile[indexUpdate].menu
    jsonFile[indexUpdate] = restaurant
    jsonFile[indexUpdate].menu = menuAux
    await ga.escribirArchivo(jsonFile)

}

async function eliminarRestaurante() {
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    let restaurantes = [];
    jsonFile.forEach(element => {
        restaurantes.push(element.nombre);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un Restaurante: ',
            choices: restaurantes,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (res_actual, index) {
            if (res_actual.nombre === seleccion.option) {
                return index
            }
        }
    )
    jsonFile.splice(indexUpdate, 1)
    await ga.escribirArchivo(jsonFile)

}

module.exports = {crearRestaurante, listarRestaurantes, actualizarRestaurante, eliminarRestaurante}