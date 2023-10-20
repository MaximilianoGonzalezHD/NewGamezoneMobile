import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-juego-plei',
  templateUrl: './juego-plei.page.html',
  styleUrls: ['./juego-plei.page.scss'],
})
export class JuegoPleiPage implements OnInit {

  constructor(private bd: DbservicioService, private router: Router, private route: ActivatedRoute) { }
  videojuego: any;
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

}
