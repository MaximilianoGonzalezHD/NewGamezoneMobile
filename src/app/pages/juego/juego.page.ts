import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  videojuego: any;
  constructor(private bd: DbservicioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const slug = paramMap.get('slug');
      if (slug) {
        this.bd.buscarJuegoporslug(slug).then((videojuego) => {
          if (videojuego) {
            this.videojuego = videojuego;
          } else {
            console.log('No se encontró un videojuego con el slug proporcionado.');
          }
        });
      }
    });
  }


  agregarAlCarrito(videojuego_id: number) {
    // Llama al servicio para agregar el videojuego al carrito con cantidad 1
    this.bd.agregarAlCarrito(videojuego_id, 1, 1)
      .then(() => {
        this.bd.presentAlert("Se ha agregado su videojuego");
        this.router.navigate(['/carrito'])
      })
      .catch(error => {
        // Error: no se pudo agregar el videojuego al carrito
        console.error(error);
      });
  }

}


