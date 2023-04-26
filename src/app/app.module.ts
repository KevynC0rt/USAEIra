import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { InstitucionesComponent } from './backend/instituciones/instituciones.component';
import { UsuariosComponent } from './backend/usuarios/usuarios.component';
import { InsertComponent } from './backend/instituciones/insert/insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrabajadoresComponent } from './backend/trabajadores/trabajadores.component';
import { InsertarComponent } from './backend/trabajadores/insertar/insertar.component';
import { ViewComponent } from './backend/trabajadores/view/view.component';
import { View2Component } from './backend/trabajadores/view2/view2.component';
import { View3Component } from './backend/trabajadores/view3/view3.component';
import { View4Component } from './backend/trabajadores/view4/view4.component';
import { View5Component } from './backend/trabajadores/view5/view5.component';
import { EditarComponent } from './backend/trabajadores/editar/editar.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitucionesComponent,
    InsertComponent,
    UsuariosComponent,
    TrabajadoresComponent,
    InsertarComponent,
    ViewComponent,
    View2Component,
    View3Component,
    View4Component,
    View5Component,
    EditarComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    FormsModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
