import { Component, OnInit } from '@angular/core';
import { DbservicioService } from 'src/app/services/dbservicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-mod-producto',
  templateUrl: './mod-producto.page.html',
  styleUrls: ['./mod-producto.page.scss'],
})
export class ModProductoPage implements OnInit {
  id_juego = "";
  nombre = "";
  descripcion = "";
  precio = "";
  imagen: any;
  seccion = "";
  slug = "";
  constructor(private bd: DbservicioService, private router: Router, private activatedrouter: ActivatedRoute) {
    this.activatedrouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras?.state){
      this.id_juego = this.router.getCurrentNavigation()?.extras?.state?.['id_juegoenviado'];
      this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombrevenviado'];
      this.descripcion = this.router.getCurrentNavigation()?.extras?.state?.['descripcionenviado'];
      this.precio = this.router.getCurrentNavigation()?.extras?.state?.['precioenviado'];
      this.imagen = this.router.getCurrentNavigation()?.extras?.state?.['imagenvenviado'];
      this.seccion = this.router.getCurrentNavigation()?.extras?.state?.['seccion_idenviado'];
      this.slug = this.router.getCurrentNavigation()?.extras?.state?.['slugenviado'];
      }
    })
   }

  ngOnInit() {
  }
editar(){
  this.bd.actualizarJuego(this.id_juego,this.nombre,this.descripcion,this.precio,this.imagen)
  this.bd.presentAlert("VideoJuego Actualizado");
  this.router.navigate(['/lista-videojuegos'])
}
async takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Photos, 
  });

  this.imagen = image.dataUrl;
}
}
