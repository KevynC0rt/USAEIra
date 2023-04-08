import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { InstitucionesComponent } from './backend/instituciones/instituciones.component';
import { MenuComponent } from './backend/menu/menu.component';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {path: 'instituciones', component: InstitucionesComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
