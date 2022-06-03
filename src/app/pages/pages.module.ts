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
import { PagesRoutingModule } from './pagesRouting.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { Not403Component } from './not403/not403.component';
import { ReporteComponent } from './reporte/reporte.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AnaliticaComponent,
    AnaliticaEdicionComponent,
    EspecialidadComponent,
    EspecialidadEdicionComponent,
    InicioComponent,
    LoginComponent,
    MedicoComponent,
    MedicoEdicionComponent,
    Not403Component,
    PacienteComponent,
    PacienteEdicionComponent,
    ReporteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OrganizarMaterialModule,
    PagesRoutingModule,
    PdfViewerModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class PagesModule { }
