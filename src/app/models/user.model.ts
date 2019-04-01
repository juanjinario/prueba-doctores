export class User
{  
    constructor(tipo: number, nombre: string, apellido1: string, apellido2: string, 
                calle?: string, numero?: string, ciudad?: string, key$?: string)
    {
        this.tipo = tipo;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.calle = calle;
        this.numero = numero;
        this.ciudad = ciudad;
        this.key$ = key$;
    }

    public key$?: string;
    public tipo: number;
    public nombre: string;
    public apellido1: string;
    public apellido2: string;
    public calle?: string;
    public numero?: string;
    public ciudad?: string;
}