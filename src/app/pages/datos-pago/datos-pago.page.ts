import { Component, OnInit } from '@angular/core';
import { DbservicioService } from '../../services/dbservicio.service';
import { CarritoItem } from '../../interfaces/carrito-item';

@Component({
  selector: 'app-datos-pago',
  templateUrl: './datos-pago.page.html',
  styleUrls: ['./datos-pago.page.scss'],
})
export class DatosPagoPage implements OnInit {
  correo: string = ''; 
  rut: string = '';   
  carritoId: number;
  userId: string | null | number; 
  totalCarrito: number = 0;
  carrito: CarritoItem[] = [];
  
  constructor(private bd: DbservicioService) {
    this.userId = localStorage.getItem('userId');
    this.carritoId = 1;
  } 
  ngOnInit() {
    if (this.userId) {
      this.bd.obtenerIdCarritoDeUsuario(this.userId)
        .then((carritoId) => {
          this.carritoId = carritoId;
          this.actualizarCarrito();
        })
        .catch((error) => {
          console.error('Error al obtener el carrito de usuario:', error);
        });
    }
  
    this.bd.obtenerCarrito().subscribe((carrito) => {
      this.carrito = carrito;
      this.actualizarTotalCarrito();
    });
  }
comprar(){
  this.bd.procesarCompraNoRegistrado(this.rut,this.correo,this.totalCarrito)
}
comprarconusuario(){
  this.bd.procesarCompraRegistrado(this.rut,this.userId,this.totalCarrito);
}
actualizarTotalCarrito() {
  this.totalCarrito = this.carrito.reduce((total, item) => {
    total += item.cantidad * item.precio;
    return total;
  }, 0);
}
async actualizarCarrito() {
  await this.bd.actualizarCarrito(this.carritoId);
}

hasUserRole(role: string): boolean {
  const storedRole = localStorage.getItem('userRole');
  return storedRole === role;
}
}

  


