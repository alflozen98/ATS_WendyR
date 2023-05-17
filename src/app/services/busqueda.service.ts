import { Injectable } from '@angular/core';
import { menuItem } from '../Shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor() { }

  private _nombreTienda:string = 'Tienda Alf';
  private _menu:menuItem[] = [ 
    {
      name: 'Buscar',
      icon: 'search'
    },
    {
      name: 'Log In',
      icon: 'perm_identity'
    },
    {
      name: 'Favoritos',
      icon: 'favorite_border'
    },
    {
      name: 'Bolsa',
      icon: 'local_mall'
    }
  ];
  private _categorias:string[] = [ "Nuevo!", "Colección", "Beauty", "Lifestyle", "Kid's Shop" ];

  get getNombreTienda() {
    return `${this._nombreTienda}`;
  }

  get getMenu() {
    return [...this._menu];
  }

  get getCategorias() {
    return [... this._categorias]
  }

}
