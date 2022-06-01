import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardService } from "../_services/guard.service";
import { AnaliticaEdicionComponent } from "./analitica/analitica-edicion/analitica-edicion.component";
import { AnaliticaComponent } from "./analitica/analitica.component";
import { EspecialidadEdicionComponent } from "./especialidad/especialidad-edicion/especialidad-edicion.component";
import { EspecialidadComponent } from "./especialidad/especialidad.component";
import { InicioComponent } from "./inicio/inicio.component";
import { MedicoComponent } from "./medico/medico.component";
import { Not403Component } from "./not403/not403.component";
import { PacienteEdicionComponent } from "./paciente/paciente-edicion/paciente-edicion.component";
import { PacienteComponent } from "./paciente/paciente.component";

export const routes: Routes = [
    {path : 'paciente', component: PacienteComponent, children:[
        {path : 'nuevo', component: PacienteEdicionComponent},
        {path : 'edicion/:id', component: PacienteEdicionComponent},
      ], canActivate: [GuardService]},
    {path : 'especialidad', component: EspecialidadComponent, children:[
        {path : 'nuevo', component: EspecialidadEdicionComponent},
        {path : 'edicion/:id', component: EspecialidadEdicionComponent},
      ], canActivate: [GuardService]},
    {path : 'analitica', component: AnaliticaComponent, children:[
        {path : 'nuevo', component: AnaliticaEdicionComponent},
        {path : 'edicion/:id', component: AnaliticaEdicionComponent},
      ], canActivate: [GuardService]},
    {path : 'medico', component: MedicoComponent, canActivate: [GuardService]},
    {path: 'inicio', component: InicioComponent, canActivate: [GuardService]},
    {path: 'not-403', component: Not403Component},
    
    
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }