import { Component, OnInit } from '@angular/core';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-datos-pago',
  templateUrl: './datos-pago.page.html',
  styleUrls: ['./datos-pago.page.scss'],
})
export class DatosPagoPage implements OnInit {
  correo: string = ''; 
  rut: string = '';    

  constructor(private bd: DbservicioService) {} 
  ngOnInit() {
  }


}

  


