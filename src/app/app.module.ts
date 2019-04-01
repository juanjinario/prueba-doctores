import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { UsersService } from './services/users.service';

// Componentes
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { HomeComponent } from './components/home/home.component';
import { EditPatientComponent } from './components/patient/edit-patient/edit-patient.component';
import { ListPatientComponent } from './components/patient/list-patient/list-patient.component';
import { NavMenuComponent } from './components/shared/nav-menu/nav-menu.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditPatientComponent,
    ListPatientComponent,
    NavMenuComponent,
    ListUserComponent,
    EditUserComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ UsersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
