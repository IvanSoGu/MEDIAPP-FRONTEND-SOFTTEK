import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { MedicoEdicionComponent } from './pages/medico/medico-edicion/medico-edicion.component';
import { OrganizarMaterialModule } from './organizar-material/organizar-material.module';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { AnaliticaComponent } from './pages/analitica/analitica.component';
import { AnaliticaEdicionComponent } from './pages/analitica/analitica-edicion/analitica-edicion.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { EspecialidadEdicionComponent } from './pages/especialidad/especialidad-edicion/especialidad-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    AnaliticaComponent,
    AnaliticaEdicionComponent,
    EspecialidadComponent,
    EspecialidadEdicionComponent,
    MedicoComponent,
    MedicoEdicionComponent,
    PacienteComponent,
    PacienteEdicionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSortModule,
    OrganizarMaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
