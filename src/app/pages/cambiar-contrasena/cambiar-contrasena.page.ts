import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {
  contrau: String = "";
  confirmcontratrau: String = "";
  
  userId: string | null;
  usuario_list = [
    {
      id_usuariou: '',
      emailu: '',
      nombre_usuariou: '',
      contrasenau: '',
      nombreu: '',
      rol_id: '',
    }

  ]

  constructor( private bd: DbservicioService, private router: Router) { 
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit() {
    this.bd.dbState().subscribe(res => {
      if (res) {
        this.bd.buscarUsuarioPorId(this.userId)
          .then(item => {
            this.usuario_list = item;
            console.log('Datos del usuario:', this.usuario_list);
          })
          .catch(error => {
            console.error('Error al buscar el usuario:', error);
          });
      }
    });
  }

  cambiar(){
    this.bd.actualizarcontrasena(this.userId,this.contrau);
    this.bd.presentAlert('Se ha modificado la contraseña!');
    this.router.navigate(['/perfil']);
  }

}
