import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ UsersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
