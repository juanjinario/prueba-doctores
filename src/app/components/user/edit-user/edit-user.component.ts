import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInOut } from '../../../services/animations';
import { NgForm } from '@angular/forms';
import { Professional } from '../../../models/professional.model';
import { Patient } from '../../../models/patient.model';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  animations: [fadeInOut]

})
export class EditUserComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  esNuevo:boolean = false;
  tiposUsuario: string[] = ['Paciente', 'Profesional'];
  usuario:any = { tipoUsuario: 'Paciente',pasaporte:"" , nombre: "", apellido1: "", apellido2: "", calle:"", numero:"", ciudad:"" }
  key:string;
  loadingIndicator: boolean;
  public nombre:string;

  constructor( private usersService: UsersService,
               private router: Router,
               private activateRoute: ActivatedRoute,
               private toastr: ToastrService) {
                 this.loadingIndicator = true;
                 this.activateRoute.params
                 .subscribe( parametros =>{
                  this.key = parametros['id'];
                  this.esNuevo = this.key == 'nuevo' ? true : false;
                  if (!this.esNuevo){
                    this.obtenerUsuario();
                  }else{
                    this.loadingIndicator = false;
                  }
                 });
               }

  ngOnInit() {
  }

  obtenerUsuario(){
    this.usersService.obtenerUsuario(this.key)
    .pipe( finalize( () => this.loadingIndicator = false))
    .subscribe(
      data =>{
        this.usuario = data;
        this.nombre = `${this.usuario.nombre} ${this.usuario.apellido1}`; },
      error => console.error(error));
  }

  guardar( form: any ){
    console.log( form );
    // console.log(this.usuario);
    if (!form.valid) {
      // Causes validation to update.
      this.showError('Error',`Rellene todos los campos obligatorios`);
      return;
  }

    if (this.esNuevo){
      this.usersService.nuevoUsuario(this.usuario).subscribe(
        (data: any) =>{
        this.router.navigate(['edit-user',data.name]);
        this.showSuccess('Creación',`El usuario ${this.usuario.nombre} ha sido creado`)},
        error => console.error(error));
    }else{
      this.usersService.actualizarUsuario(this.usuario,this.key).subscribe(
        data =>{
          this.showSuccess('Actualización',`El usuario ${this.usuario.nombre} ha sido editado`); },
        error => console.error(error));
    }
  }

  showSuccess(titulo: string,mensaje: string) {
    this.toastr.success(mensaje, titulo);
  }

  showError(titulo: string,mensaje: string) {
    this.toastr.error(mensaje, titulo);
  }
}
