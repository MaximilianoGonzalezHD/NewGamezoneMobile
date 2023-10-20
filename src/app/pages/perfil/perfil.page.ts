import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;
  constructor() { }
  ngOnInit() {
const usuarioGuardado = localStorage.getItem('usuario');
if (usuarioGuardado) {
  this.usuario = JSON.parse(usuarioGuardado);
}

  }
}
