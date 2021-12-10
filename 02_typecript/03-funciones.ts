

function sumarNumeros(
    numeroInicial: number,
    ...numerosInfinitos: number[]
): number {
    return numeroInicial + numerosInfinitos[1];
}

sumarNumeros(1, 1, 2, 3, 4, 5)

function imprimir(mensaje: string) {
    console.log('Hola, '+mensaje)
}

const arreglo1:number[]=[1,2]
const arreglo2:Array<number>=[1,2]
const arreglo3:(number|string|boolean)[] =[1,'dos',true]
const arreglo4:Array<number|string|boolean> =[1,'dos',true]
let arreglo5: number[]|string[]=[1,2]
arreglo5=['uno','dos']