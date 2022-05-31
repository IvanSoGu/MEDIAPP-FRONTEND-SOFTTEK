import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Analitica } from 'src/app/_modulo/analitica';
import { AnaliticasService } from 'src/app/_services/analiticas.service';

@Component({
  selector: 'app-analitica',
  templateUrl: './analitica.component.html',
  styleUrls: ['./analitica.component.css']
})
export class AnaliticaComponent implements OnInit {

  constructor(private analiticaService : AnaliticasService) { }
  origen: MatTableDataSource<Analitica>;
  columnasAMostrar: String[] = ['idAnalitica', 'nombre', 'descripcion', 'acciones'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {

    this.analiticaService.analiticaCambiado.subscribe(data => {
      this.origen = new MatTableDataSource(data);
      this.origen.sort = this.sort;
      this.origen.paginator = this.paginator;
    })

    this.analiticaService.listar().subscribe(data => {
      this.origen = new MatTableDataSource(data);
      this.origen.sort = this.sort;
      this.origen.paginator = this.paginator;
    })
  }

}
