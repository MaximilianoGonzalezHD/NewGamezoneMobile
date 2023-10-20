import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public loadingService: LoadingService, public router: Router) {

  }
irVideojuegos(){
  this.router.navigate(['/lista-videojuegos'])
}
irUsuarios(){
  this.router.navigate(['/lista-usuario'])
}
}
