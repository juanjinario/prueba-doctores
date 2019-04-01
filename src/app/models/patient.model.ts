import { User } from './user.model';

export class Patient extends User
{
    constructor(tipo: number, nombre: string, apellido1: string, apellido2: string,
        nhc: string, 
        calle?: string, numero?: string, ciudad?: string, key$?: string,)
    {
        super(tipo, nombre, apellido1, apellido2, calle, numero, ciudad, key$);
        this.nhc=nhc;

    }

    public nhc: string;
}