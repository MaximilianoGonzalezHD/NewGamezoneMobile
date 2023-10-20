import { Component, OnInit } from '@angular/core';
import { CarritoItem } from 'src/app/interfaces/carrito-item';
import { DbservicioService } from 'src/app/services/dbservicio.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: CarritoItem[] = [];
  totalCarrito: any;
  
  constructor(private bd: DbservicioService) {}

  ngOnInit() {

    this.bd.obtenerCarrito().subscribe((carrito) => {
      this.carrito = carrito;
    });
  }
  actualizarTotalCarrito() {
    this.totalCarrito = this.carrito.reduce((total, item) => {
      total = item.cantidad * item.precio;
      return total  
    }, 0);
    
  }

  actualizarCantidad(videojuego: CarritoItem, nuevaCantidad: number) {
    this.bd.actualizarCantidadEnCarrito(videojuego.id_juego, nuevaCantidad, 1)
      .then(() => {
      })
      .catch(error => {
        console.error(error);
      });
  }
  eliminarDelCarrito(videojuego: CarritoItem) {
    this.bd.eliminarCarrito(videojuego.id_juego)
      .then(() => {
      })
      .catch(error => {
        console.error(error);
      });
  }

  vaciarCarrito() {
    this.bd.vaciarCarrito(1)
      .then(() => {
      })
      .catch(error => {
        console.error(error);
      });
  }

} 