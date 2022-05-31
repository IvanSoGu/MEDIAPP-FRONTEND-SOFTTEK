import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaliticaEdicionComponent } from './pages/analitica/analitica-edicion/analitica-edicion.component';
import { AnaliticaComponent } from './pages/analitica/analitica.component';
import { EspecialidadEdicionComponent } from './pages/especialidad/especialidad-edicion/especialidad-edicion.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { MedicoEdicionComponent } from './pages/medico/medico-edicion/medico-edicion.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { PacienteComponent } from './pages/paciente/paciente.component';

const routes: Routes = [
  {path : 'analitica', component: AnaliticaComponent, children: [
    {path: 'edicion/:id', component:AnaliticaEdicionComponent},
    {path: 'nuevo', component:AnaliticaEdicionComponent}
  ]},
  {path : 'especialidad', component: EspecialidadComponent, children: [
    {path: 'edicion/:id', component:EspecialidadEdicionComponent},
    {path: 'nuevo', component:EspecialidadEdicionComponent}
  ]},
  {path : 'medico', component: MedicoComponent, children: [
    {path: 'edicion/:id', component:MedicoEdicionComponent},
    {path: 'nuevo', component:MedicoEdicionComponent}
  ]},
  {path : 'paciente', component: PacienteComponent, children: [
    {path: 'edicion/:id', component:PacienteEdicionComponent},
    {path: 'nuevo', component:PacienteEdicionComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
