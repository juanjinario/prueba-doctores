import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { fadeInOut } from '../../../services/animations';
import { Professional } from '../../../models/professional.model';
import { Patient } from '../../../models/patient.model';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import {MatSnackBar} from '@angular/material';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
    animations: [fadeInOut]
})
export class ListUserComponent implements OnInit {

  usuarios:any[] = [];
  loadingIndicator: boolean;
  constructor(private usersService: UsersService,
              private router: Router,
              private snackBar: MatSnackBar) { 
                this.obtenerUsuarios();
              }

  ngOnInit() {
  }

  obtenerUsuarios(){
    this.loadingIndicator = true;
    this.usersService.obtenerUsuarios()
    .pipe( finalize( () => this.loadingIndicator = false))
    .subscribe( 
      data =>{  
        for (let key$ in data){
          let usuario:any = data[key$];
          usuario.key$ = key$;
          this.usuarios.push(usuario);
        };
        console.log(this.usuarios); 
      },
      error => console.error(error))
  }


  private confirmDelete(usuario: any) {
    this.snackBar.open(`Borrar a ${usuario.nombre}?`, 'BORRAR', { duration: 5000 })
        .onAction().subscribe(() => {
            this.loadingIndicator = true;
            this.usersService.borrarUsuario(usuario.key$)
            .pipe( finalize( () => this.loadingIndicator = false))
            .subscribe( 
              data =>{  
                let index = this.usuarios.indexOf(usuario);
                this.usuarios.splice(index, 1);
              },
              error => console.error(error));
        });
}

}
