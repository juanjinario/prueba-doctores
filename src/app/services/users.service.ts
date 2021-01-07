import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Professional } from '../models/professional.model';
import { Patient } from '../models/patient.model';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class UsersService {

  fireBaseUrl = 'https://usersapp-23dda.firebaseio.com/usuarios.json';
  usuarioBaseUrl = 'https://usersapp-23dda.firebaseio.com/usuarios';
  constructor( private http: HttpClient) { }

  nuevoUsuario( usuario: User){
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.fireBaseUrl, body, {headers: headers})
      .pipe(map( res => {
        // console.log(res.json());
        return res;
      }));
  }

  actualizarUsuario( usuario: User, key$: string){
    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${this.usuarioBaseUrl}/${key$}.json`;

    return this.http.put( url, body, {headers: headers})
      .pipe(map( res => {
        // console.log(res.json());
        return res;
      }));
  }

  obtenerUsuario( key$: string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.usuarioBaseUrl}/${key$}.json`;
    return this.http.get( url, {headers: headers})
      .pipe(map( res => {
        return res;
      }));
  }

  obtenerUsuarios( ){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get( this.fireBaseUrl, {headers: headers})
      .pipe(map( res => {
        return res;
      }));
  }

  borrarUsuario( key$: string){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${this.usuarioBaseUrl}/${key$}.json`;

    return this.http.delete( url, {headers: headers})
      .pipe(map( res => {
        // console.log(res.json());
        return res;
      }));
  }
}
