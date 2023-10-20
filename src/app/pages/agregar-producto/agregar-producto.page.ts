import { Component, OnInit } from '@angular/core';
import { DbservicioService } from 'src/app/services/dbservicio.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController } from '@ionic/angular'; // Importa AlertController
import { ValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa ValidatorFn, FormGroup y Validators

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {
  id_juego = "";
  nombre = "";
  descripcion = "";
  precio = "";
  imagen: any;
  seccion = "";
  slug = "";


  form: FormGroup;

  constructor(
    private bd: DbservicioService,
    public router: Router,
    private alertController: AlertController, // Agrega AlertController
    private formBuilder: FormBuilder // Agrega formBuilder
  ) {
   
    this.form = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required])],
      descripcion: ['', Validators.compose([Validators.required])],
      precio: ['', Validators.compose([Validators.required])],
      seccion: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });

    this.imagen = image.dataUrl;
  }

  insertar() {
    if (this.nombre.length < 3 || this.nombre.length > 20) {
      this.bd.presentAlert('El nombre del juego debe tener entre 3 y 20 caracteres.');
      return; 
    }
  
    const parsedPrice = parseFloat(this.precio);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      this.bd.presentAlert('El precio debe ser un número positivo.');
      return; 
    }
    const zero = parseFloat(this.precio);
    if (isNaN(parsedPrice) || zero == 0) {
      this.bd.presentAlert('El precio no puede ser 0');
      return; 
    }
    if (this.nombre.trim() === '') {
      this.bd.presentAlert('El nombre del juego no puede ser solo espacios en blanco.');
      return; 
    }
    if (this.descripcion.length < 10 || this.descripcion.length > 500) {
      this.bd.presentAlert('La descripción debe tener entre 10 y 500 caracteres.');
      return; 
    }
    if (!this.form.valid) {
      this.bd.presentAlert('Error en el formulario: Debe ingresar todos los datos');
    }
 
    if (!this.seccion) {
      this.bd.presentAlert('Debes seleccionar una sección.');
      return; 
    }
    if (!this.imagen) {
      this.bd.presentAlert('Debes seleccionar una imagen.');
      return; 
    }

    this.slug = this.generateSlug(this.nombre);
    this.bd.insertarJuego(this.nombre, this.descripcion, this.precio, this.imagen, this.seccion, this.slug);
    this.bd.presentAlert('Juego Agregado!');
    this.router.navigate(['/lista-videojuegos']);
  }

  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  private generateSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }
}