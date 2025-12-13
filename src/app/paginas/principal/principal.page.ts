import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, ModalController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/headerglobal/headerglobal.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { VentanaEmergenteComponent } from 'src/app/componentes/ventana-emergente/ventana-emergente.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [ HttpClientModule, IonContent, CommonModule, FormsModule, HeaderGlobalComponent, FooterGlobalComponent, VentanaEmergenteComponent], // Agregué VentanaEmergenteComponent
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  productos: any[] = [];
  productosfiltrados: any[] = [];
  categorias: any[] = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.cargarProductos();
    this.cargarCategorias();
  }

   cargarCategorias(){
     this.http.get('assets/BD/categorias.json')
     .subscribe((data: any) => {
      this.categorias =data;
     });
  }

  filtrarPorSubcategorias(nombre: string) {
    this.productosfiltrados = this.productos.filter(p => p.subcategorias === nombre);
  }
    mostrarTodos() {
  this.productosfiltrados = [...this.productos]}

   cargarProductos(){
     this.http.get('assets/BD/productos.json')
     .subscribe((data: any) => {this.productos = data;
      this.productosfiltrados = [...this.productos];
     } );
  }


  irktm(producto: any) {
    this.router.navigate(['ktm'], { queryParams: producto });
  }

  filtrar(event: any) {
    const texto = (event.target.value || '').toLowerCase().trim();

    if (texto === '') {
      this.productosfiltrados = [...this.productos];
      return;
    }

    this.productosfiltrados = this.productos.filter(
      p => p.titulo.toLowerCase().includes(texto) ||
           p.descripcion.toLowerCase().includes(texto) ||
           p.precio.toString().includes(texto)
    );
  }
  async verimagengrande(producto: any) {
    const modal = await this.modalCtrl.create({
      component: VentanaEmergenteComponent,
      componentProps: { 
        Imagen: producto.imagen, 
        titulo: producto.titulo },
      cssClass: 'estilo-modal'
    });
    await modal.present();
  }
  imagenesCarrusel = [
  'assets/img/duke 690 rs -004.jpg',
  'assets/img/ktm_Stoked__87867.jpg',
  'assets/img/ktm-1290-super-adventure-r-2021-1600-01.jpg',
  'assets/img/ktm-adventure-.jpg'
  
];

slideOpts = {
  initialSlide: 0,
  speed: 600,
  autoplay: {
    delay: 300
  },
  loop: true
};
 
  
}