import { Component, OnInit } from '@angular/core';
import { DbservicioService } from 'src/app/services/dbservicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  compra: any;
  
  detalles: any;
  userId: string | null | number; 
  usuario_list = [
    {
      id_usuariou: '',
      emailu: '',
      nombre_usuariou: '',
      contrasenau: '',
      nombreu: '',
      imagenu: '',
      rol_id: '',
    }
  ]

  constructor(private bd: DbservicioService, private router: Router) { 
    this.userId = localStorage.getItem('userId');

  }

  ngOnInit() {
    this.iniciarCargaDatos();
    this.bd.dbState().subscribe(async (res) => {
      if (res) {
        try {
          this.usuario_list = await this.bd.buscarUsuarioPorId(this.userId);
          console.log('Datos del usuario:', this.usuario_list);

        } catch (error) {
          console.error('Error al buscar el usuario o las compras:', error);
        }
      }
    });
  }

  confirmarcompra() {
    this.bd.presentAlert('Gracias por su compra!');
    this.router.navigate(['/home']);
  }

  async iniciarCargaDatos() {
    this.compra = await this.bd.obtenerComprasPorUsuario(this.userId);
    const id = await this.bd.obtenerIdCompra(this.userId);
    this.detalles = await this.bd.obtenerDetallesCompraPorId(id);
  }
}
