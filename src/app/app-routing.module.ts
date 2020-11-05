import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailspageComponent } from './common/detailspage/detailspage.component';
import { LoginComponent } from './common/login/login.component';
import { PrivatePageComponent } from './common/private-page/private-page.component';
import { RegisterComponent } from './common/register/register.component';
import { LoginGuard } from './login.guard';
import { PrivateGuard } from './private.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [PrivateGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [PrivateGuard]},
  { path: 'privatepage', component: PrivatePageComponent, canActivate: [LoginGuard]},
  { path: 'details/:i', component: DetailspageComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
