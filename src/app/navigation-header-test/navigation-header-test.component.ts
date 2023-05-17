import { Component, Input } from '@angular/core';
import { BusquedaService } from '../services/busqueda.service';

@Component({
  selector: 'app-navigation-header-test',
  templateUrl: './navigation-header-test.component.html',
  styleUrls: ['./navigation-header-test.component.css']
})
export class NavigationHeaderTestComponent {

  @Input() isLoggedIn:boolean = false;

  nombreTienda:string = "";

  constructor( private servicioBusqueda:BusquedaService) {
    this.nombreTienda = this.servicioBusqueda.getNombreTienda;
  }

  get menu() {
    return this.servicioBusqueda.getMenu;
  }

  get categorias() {
    return this.servicioBusqueda.getCategorias;
  }

}
