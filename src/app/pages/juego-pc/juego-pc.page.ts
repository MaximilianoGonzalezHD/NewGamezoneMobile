import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-juego-pc',
  templateUrl: './juego-pc.page.html',
  styleUrls: ['./juego-pc.page.scss'],
})
export class JuegoPcPage implements OnInit {
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

}
