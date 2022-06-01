import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliticaComponent } from './analitica/analitica.component';
import { AnaliticaEdicionComponent } from './analitica/analitica-edicion/analitica-edicion.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { EspecialidadEdicionComponent } from './especialidad/especialidad-edicion/especialidad-edicion.component';
import { MedicoComponent } from './medico/medico.component';
import { MedicoEdicionComponent } from './medico/medico-edicion/medico-edicion.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteEdicionComponent } from './paciente/paciente-edicion/paciente-edicion.component';
import { OrganizarMaterialModule } from '../organizar-material/organizar-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';
import { PagesRoutingModule } from './pagesRouting.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AnaliticaComponent,
    AnaliticaEdicionComponent,
    EspecialidadComponent,
    EspecialidadEdicionComponent,
    MedicoComponent,
    MedicoEdicionComponent,
    PacienteComponent,
    PacienteEdicionComponent,
    LoginComponent,
    InicioComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OrganizarMaterialModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class PagesModule { }
