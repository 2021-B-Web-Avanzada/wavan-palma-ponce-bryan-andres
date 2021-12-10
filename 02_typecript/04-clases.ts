

class Persona{
    public nombre: string;
    public apellido: string;
    static nomRef:String;
    protected nombreYApellido='';
    constructor(
        nombreParameter: string,
        apellidoParameter: string,
    ){
        this.nombre=nombreParameter
        this.apellido=apellidoParameter
        this.nombreYApellido=nombreParameter
        +' '+apellidoParameter
    }
    private mostrarNombreApellido():string{
        return this.nombreYApellido
    }
}

class Usuario extends Persona{
    constructor(
        nombreParameter: string,
        apellidoParameter: string,
        public cedula: string,
        public estadoCivil: string
    ) {
        super(nombreParameter,apellidoParameter);
    }
}

const andres=new Usuario(
    'Andres',
    'Palma',
    '1313695130',
    'soltero'
);

