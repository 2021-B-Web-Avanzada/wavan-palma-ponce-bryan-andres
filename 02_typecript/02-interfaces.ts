

interface Usuario{
    nombre: string
    apellidos: string
    edad?:number
    casado: boolean |0|1
    estado: 'AC'|'IN' |'BN'
    imprimirUsuario: (mensaje: string)=> string|'BN'
    calcularImpuesto: (mensaje:number)=>number
    estadoActual:()=>'AP'|'AF'|'AT'
}