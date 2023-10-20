import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-juego-xbox',
  templateUrl: './juego-xbox.page.html',
  styleUrls: ['./juego-xbox.page.scss'],
})
export class JuegoXboxPage implements OnInit {

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
