import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from 'src/app/_modulo/menu'
import { LoginService } from 'src/app/_services/login.service';
import { MenuService } from 'src/app/_services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private rutas: Router,
    private menuService: MenuService,
    private loginService: LoginService,
    ) { }

  menus : Menu[]

  ngOnInit(): void {

    this.menuService.getMenuCambio().subscribe(
      x=> this.menus = x
    )

  }

  navegar(url: string){
    this.rutas.navigate([url]);
  }

  cerrarSesion(){
    this.loginService.cerrarSesion();
  }
}
