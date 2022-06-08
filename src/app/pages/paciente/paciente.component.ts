import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/_modulo/paciente';


import { PacientesService } from 'src/app/_services/pacientes.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

//pacientes : Paciente[];
  constructor(private pacienteService : PacientesService) { }
  origen: MatTableDataSource<Paciente>;
  columnasAMostrar: String[] = ['idPaciente', 'nombres', 'apellidos', 'acciones'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  liveAnnouncer: LiveAnnouncer;

  ngOnInit(): void {
//  this.pacienteService.listar().subscribe(
//  x => this.pacientes = x);

    this.pacienteService.pacienteCambiado.subscribe(data => {
      this.origen = new MatTableDataSource(data);
      this.origen.sort = this.sort;
      this.origen.paginator = this.paginator;
    })

    this.pacienteService.listar().subscribe(data => {
      this.origen = new MatTableDataSource(data);
      this.origen.sort = this.sort;
      this.origen.paginator = this.paginator;
    })
  }

  cambioFiltro(event: Sort){
    if (event.direction) {
      this.liveAnnouncer.announce(`Sorted ${event.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  eliminar(id:number){
    this.pacienteService.eliminar(id).subscribe(()=>{
      this.pacienteService.listar().subscribe(data=>{
        this.pacienteService.setPacienteCambiado(data);
        this.pacienteService.setMensajeCambiado("ELIMINADO");
      })
    })
    /*this.pacienteService.getMensajeCambiado().subscribe(mensaje=>{
      this.snackBar.open(mensaje,"cerrar")
    })*/
  }

}
