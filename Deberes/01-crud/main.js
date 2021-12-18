const inquirer = require('inquirer');
const crudR = require('./crud-restaurante.js')
const crudM = require('./crud-menu.js')

async function menuPrincipal() {
    await inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opcion',
                message: 'Seleccione la accion a realizar',
                choices: ['Gestionar Restaurantes', 'Gestionar Menus', 'Salir'],
            },
        ])
        .then(async answers => {
            if (answers['opcion'] === 'Gestionar Restaurantes') {
                await menuRestaurante()
            }
            if (answers['opcion'] === 'Gestionar Menus') {
                await menuMenus()
            }
        });

}

async function menuRestaurante() {
    await inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opcion',
                message: 'Seleccione la accion a realizar',
                choices: ['Añadir Restaurante',
                    'Listar Todos los restaurantes',
                    'Actualizar Restaurante',
                    'Eliminar Restaurante',
                    'Regresar', 'Salir']
            },
        ])
        .then(async answers => {
            switch (answers['opcion']) {
                case 'Añadir Restaurante':
                    await crudR.crearRestaurante().then(r => '')
                    await menuRestaurante()
                    break
                case 'Listar Todos los restaurantes':
                    await crudR.listarRestaurantes()
                    await menuRestaurante()
                    break
                case 'Actualizar Restaurante':
                    await crudR.actualizarRestaurante()
                    await menuRestaurante()
                    break
                case 'Eliminar Restaurante':
                    await crudR.eliminarRestaurante()
                    await menuRestaurante()
                    break
                case 'Regresar':
                    await menuPrincipal()
                    break
                case 'Salir':
                    console.log('Hasta pronto!')
                    break
            }

        });
}

async function menuMenus() {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opcion',
                message: 'Seleccione la accion a realizar',
                choices: ['Añadir Menu',
                    'Listar Todos los Menus',
                    'Actualizar Menu',
                    'Eliminar Menu',
                    'Regresar', 'Salir']
            },
        ])
        .then(async answers => {
            switch (answers['opcion']) {
                case 'Añadir Menu':
                    await crudM.crearMenu().then(r => '')
                    await menuMenus()
                    break
                case 'Listar Todos los Menus':
                    await crudM.listarMenus().then(r => '')
                    await menuMenus()
                    break
                case 'Actualizar Menu':
                    await crudM.actualizarMenu().then(r => '')
                    await menuMenus()
                    break
                case 'Eliminar Menu':
                    await crudM.eliminarMenu().then(r => '')
                    await menuMenus()
                    break
                case 'Regresar':
                    await menuPrincipal().then(r => '')
                    await menuMenus()
                    break
                case 'Salir':
                    console.log('Hasta pronto!')
                    await menuMenus()
                    break
            }

        });
}

menuPrincipal().then(r => '')

module.exports ={menuPrincipal,menuMenus,menuRestaurante}