import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ListUserComponent } from "./components/user/list-user/list-user.component";
import { EditUserComponent } from "./components/user/edit-user/edit-user.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'list-user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
