import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { InstitucionesComponent } from './backend/instituciones/instituciones.component';
import { UsuariosComponent } from './backend/usuarios/usuarios.component';
import { InsertComponent } from './backend/instituciones/insert/insert.component';
import { InsertarComponent } from './backend/trabajadores/insertar/insertar.component';
import { TrabajadoresComponent } from './backend/trabajadores/trabajadores.component';
import { View5Component } from './backend/trabajadores/view5/view5.component';
import { View4Component } from './backend/trabajadores/view4/view4.component';
import { View3Component } from './backend/trabajadores/view3/view3.component';
import { View2Component } from './backend/trabajadores/view2/view2.component';
import { ViewComponent } from './backend/trabajadores/view/view.component';
import { EditarComponent } from './backend/trabajadores/editar/editar.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {path: 'instituciones', component: InstitucionesComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'usuarios', component: UsuariosComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'insert', component: InsertComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'insertar', component: InsertarComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'trabajador', component: TrabajadoresComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'vista', component: ViewComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'vista2', component: View2Component, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'vista3', component: View3Component, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'vista4', component: View4Component, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'vista5', component: View5Component, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'editar', component: EditarComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) },
  {path: 'registro', component: RegistroComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']) ) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
