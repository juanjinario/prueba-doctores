import { User } from './user.model';

export class Professional extends User
{
    constructor(tipo: number, nombre: string, apellido1: string, apellido2: string, 
        ncolegiado: string,
        calle?: string, numero?: string, ciudad?: string, key$?: string)
    {
        super(tipo, nombre, apellido1, apellido2, calle, numero, ciudad, key$);
        this.ncolegiado=ncolegiado;
    }

    public ncolegiado: string;
}