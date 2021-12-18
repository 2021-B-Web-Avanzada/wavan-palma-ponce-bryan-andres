const fs = require('fs');
const path="ex.json";
const inquirer = require('inquirer');
let generos=[];
let animes=[];
async function menuPrincipal (){
    let resp=0;
    let archivo=JSON.parse(await leerArchivo());
    //console.log(typeof(archivo));
    generos=archivo.Generos;
    animes=archivo.Animes;
    //console.log(generos,animes);
    do {
        console.log("**********ANIME Y SUS GENEROS**********");
        console.log("1. Generos");
        console.log("2. Animes");
        console.log("3. Salir");
        await respuesta().then(
            async function (opcion){
                console.log(opcion.opcion);
                resp=opcion.opcion;
                switch (resp) {
                    case "1":
                        await menuGenero();
                        break;
                    case "2":
                        await menuAnime();
                        break;

                    case "3":
                        console.log("SALIENDO DEL PROGRAMA.....");
                        return;
                        break;
                    default:
                        console.log("----OPCIÓN NO VÁLIDA: POR FAVOR VUELVA A ESCOGER UNA OPCIÓN----");
                        break;
                }
            })
    }while(resp != "3");


}

const respuesta=()=>{
    return inquirer
        .prompt([{
            type: "input",
            name: "opcion",
            message: "Ingrese una opción:"
        }])
}

async function menuGenero (){
    let resp=0;
    do {
        console.log("****OPCIONES DE GENEROS DISPONIBLES***");
        console.log("1. Registrar Genero");
        console.log("2. Leer Generos");
        console.log("3. Actualizar Genero");
        console.log("4. Eliminar Genero");
        console.log("5. Regresar a Menu");
        await respuesta().then (
            async function(opcion){
                console.log(opcion.opcion);
                resp=opcion.opcion;
                switch (resp) {
                    case "1":
                        const genero =await ingresarGenero();
                        generos.push(genero);
                        await escribirArchivo(JSON.stringify({Generos:generos,Animes:animes}));
                        console.log("*******GENERO INGRESADO CON ÉXITO*******",genero);
                        break;
                    case "2":
                        console.table(generos);
                        break;

                    case "3":
                        console.table(generos);
                        await respuesta().then(
                            async function(opcion){
                                let index=opcion.opcion;
                                const genero =await ingresarGenero();
                                generos.splice(index,1,genero);   //quitar elemento del array
                                await escribirArchivo(JSON.stringify({Generos:generos,Animes:animes}));
                            })
                        break;
                    case "4":
                        console.table(generos);
                        await respuesta().then(
                            async function (opcion){
                                let index = opcion.opcion;
                                console.log(index);
                                generos.splice(index,1);
                                await escribirArchivo(JSON.stringify({Generos:generos,Animes:animes}));
                            })

                        break;
                    case "5":
                        console.log("VOLVIENDO AL MENÚ PRINCIPAL.....");
                        return;
                        break;
                    default:
                        console.log("----OPCIÓN NO VÁLIDA: POR FAVOR VUELVA A ESCOGER UNA OPCIÓN----");
                        break;
                }
            })
    }while(resp != "5");


}

async function menuAnime (){
    let resp=0;
    do {
        console.log("OPCIONES DE ANIMES DISPONIBLES");
        console.log("1. Registrar Anime");
        console.log("2. Leer Animes");
        console.log("3. Actualizar Animes");
        console.log("4. Eliminar Anime");
        console.log("5. Regresar a Menu");
        await respuesta().then (
            async function(opcion){
                resp=opcion.opcion;
                switch (resp) {
                    case "1":
                        const anime =await ingresarAnime();
                        animes.push(anime);
                        await escribirArchivo(JSON.stringify({Generos:generos,Animes:animes}));
                        console.log("*********ANIME INGRESADO CON ÉXITO*******",anime);
                        break;
                    case "2":
                        console.table(animes);
                        break;

                    case "3":
                        console.table(animes);
                        await respuesta().then(
                            async function(opcion){
                                let index=opcion.opcion;
                                const anime =await ingresarAnime();
                                animes.splice(index,1,anime);   //quitar elemento del array
                                await escribirArchivo(JSON.stringify({Generos:generos,Animes:animes}));
                            })
                        break;
                    case "4":
                        console.table(animes);
                        await respuesta().then(
                            async function (opcion){
                                let index = opcion.opcion;
                                console.log(index);
                                animes.splice(index,1);
                                await escribirArchivo(JSON.stringify({Generos:generos,Animes:animes}));
                            })
                        break;
                    case "5":
                        console.log("VOLVIENDO AL MENÚ PRINCIPAL.....");
                        return;
                        break;
                    default:
                        console.log("----OPCIÓN NO VÁLIDA: POR FAVOR VUELVA A ESCOGER UNA OPCIÓN----");
                        break;
                }
            })
    }while(resp != "5");


}
const ingresarGenero=()=>{
    return inquirer.prompt([{
        type: "input",
        name: "categoria",
        message: "Ingrese el nombre de la categoría:",
    },
        {
            type: "input",
            name: "descripcion",
            message: "Ingrese la descripción del Genero:",
        },
        {
            type: "boolean",
            name: "activo",
            message: "Ingrese el estado. Activo (true) Inactivo (false):",
        },
        {
            type: "boolean",
            name: "todoPublico",
            message: "Este género es apto para todo el público. Sí (true) o No (false):",
        },
        {
            type: "input",
            name: "subgenero",
            message: "Ingrese el subgénero:",
        },
    ])
}

const ingresarAnime=()=>{
    return inquirer.prompt([{
        type: "input",
        name:"nombre",
        message:"Ingrese el nombre del anime:"
    },
        {
            type:"input",
            name:"descripcion",
            message: "Ingrese la descripción del anime:"
        },
        {
            type:"input",
            name:"ano",
            message:"Ingrese el año de estreno:"
        },
        {
            type:"boolean",
            name: "subtitulado",
            message:"El anime disponible es subtitulado. Sí(true), No(false):"
        },
        {
            type:"input",
            name: "calificacion",
            message: "Ingrese la calificación del 1 al 5:"
        },
        {
            type:"list",
            name:"categoria",
            message:"Escoja la categoría del anime:",
            choices: generos
                .filter(element=>element.activo==="true" | element.activo==="True")
                .map(element=>element.categoria)
        }
    ])
}
const escribirArchivo= (datos)=> {
    return new Promise(
        (resolve,reject)=>{
            fs.writeFile(path, datos,'utf-8',
                (error)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve();
                    }
                })
        }
    )
}

const leerArchivo=()=> {
    return new Promise(
        (resolve,reject)=>{
            fs.readFile(path,'utf-8',
                (error, contenido)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(contenido);
                    }
                })
        }
    )
}

return menuPrincipal();