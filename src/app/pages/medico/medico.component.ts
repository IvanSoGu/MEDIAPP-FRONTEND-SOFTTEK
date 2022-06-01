import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from 'src/app/_modulo/medico';
import { MedicosService } from 'src/app/_services/medicos.service';
import { MedicoEdicionComponent } from './medico-edicion/medico-edicion.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  origen: MatTableDataSource<Medico>;
  columnasAMostrar: String[] = ['idMedico', 'nombres', 'apellidos', 'acciones'];

  columnasChild: string[] = ['nombres', 'apellidos', 'cedula', 'fotoUrl'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  liveAnnouncer: LiveAnnouncer;

  constructor(private medicoService : MedicosService, 
    public dialog: MatDialog,) { }

  ngOnInit(): void {

    this.medicoService.listar().subscribe(data => {
      this.origen = new MatTableDataSource(data);
      this.origen.sort = this.sort;
      this.origen.paginator = this.paginator;
    })

    this.medicoService.medicoCambiado.subscribe(data => {
      this.origen = new MatTableDataSource(data);
      this.origen.sort = this.sort;
      this.origen.paginator = this.paginator;
    })
    
  }

  openDialog(medico?:Medico) : void{

    const dialogref = this.dialog.open(MedicoEdicionComponent, {
      width: '500px', //tamaño del dialogo
      data: medico
    });

  }

  cambioFiltro(event: Sort){

    if (event.direction) {

      this.liveAnnouncer.announce(`Sorted ${event.direction}ending`);

    } else {

      this.liveAnnouncer.announce('Sorting cleared');

    }

  }

}


