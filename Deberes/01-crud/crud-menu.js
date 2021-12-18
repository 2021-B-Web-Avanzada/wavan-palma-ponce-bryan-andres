const fs = require("fs");
const inquirer = require("inquirer");
const ga = require('./gestion-archivos.js')

async function seleccionRestaurantes() {
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
    let i = -1
    jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre === seleccion.option) {
                i = index
                return index
            }
        }
    )
    return i

}

const ingresoMenu = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'nombre_plato',
                message: 'Ingrese el nombre del plato',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'descripcion',
                message: 'Ingresa la descricpion del plato',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'precio',
                message: 'Ingrese el precio del plato',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'tipo',
                message: 'Ingresa el tipo de plato',
                defaultValue: null
            },
            {
                type: 'list',
                name: 'vegano',
                message: 'Indique si es vegano no ',
                choices: ['true', 'false']
            }
        ]
    )
}

async function crearMenu() {
    let id_res = await seleccionRestaurantes()
    const menu = await ingresoMenu();
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    jsonFile[id_res].menu.push(menu)
    await ga.escribirArchivo(jsonFile)
}

async function listarMenus() {
    let id_res = await seleccionRestaurantes()
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)[id_res].menu
    console.log(jsonFile)
}

async function actualizarMenu() {
    let id_res = await seleccionRestaurantes()
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let restaurantes = JSON.parse(fileContent)
    let jsonFile = JSON.parse(fileContent)[id_res].menu
    let menus = [];
    jsonFile.forEach(element => {
        menus.push(element.nombre_plato);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un Menu: ',
            choices: menus,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre_plato === seleccion.option) {
                return index
            }
        }
    )
    restaurantes[id_res].menu[indexUpdate] = await ingresoMenu()
    await ga.escribirArchivo(restaurantes)
}

async function eliminarMenu() {
    let id_res = await seleccionRestaurantes()
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let restaurantes = JSON.parse(fileContent)
    let jsonFile = JSON.parse(fileContent)[id_res].menu
    let menus = [];
    jsonFile.forEach(element => {
        menus.push(element.nombre_plato);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un Menu: ',
            choices: menus,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre_plato === seleccion.option) {
                return index
            }
        }
    )
    jsonFile.splice(indexUpdate, 1)
    restaurantes[id_res].menu = jsonFile
    await ga.escribirArchivo(restaurantes)
}

module.exports = {crearMenu, listarMenus, actualizarMenu, eliminarMenu};