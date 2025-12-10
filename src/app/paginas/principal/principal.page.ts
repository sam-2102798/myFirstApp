import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/headerglobal/headerglobal.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { VentanaEmergenteComponent } from 'src/app/componentes/ventana-emergente/ventana-emergente.component';
import { ModalController } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [ HttpClientModule, IonContent, CommonModule, FormsModule, HeaderGlobalComponent, FooterGlobalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  [x: string]: any;
    
 productos: any[]=[];
  productosfiltrados: any[]= [];
  categorias: any[]=[];
   
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


    filtrarPorSubcategoria(nombre:string ){
      this.productosfiltrados 
      = this.productos.filter(p =>p.subcategoria === nombre)
  }

   cargarProductos(){
     this.http.get('assets/BD/productos.json')
     .subscribe((data: any) => {this.productos = data;
      this.productosfiltrados = [...this.productos];
     } );
  }


 irktm(producto:any){
    this.router.navigate(['ktm'], {queryParams:producto});
  }

  filtrar(event:any) {
   const texto = (event.target.value || '').toLowerCase().trim();

   if (texto === '') {
     this.productosfiltrados = [...this.productos ];
     return;
   } 

   this.productosfiltrados = this.productos.filter( 
      
    p => p.titulo.toLowerCase().includes(texto) ||
     p.descripcion.toLowerCase().includes(texto) ||
     p.precio.toString().includes(texto) 
  
    );

  }

  async verimagengrande(producto: any){
    const modal = await this.modalCtrl.create({
      component:VentanaEmergenteComponent,
      componentProps: { Imagen: producto.imagen, titulo: producto.titulo },
      cssClass: 'estilo-modal'
   });
   await modal.present();


  }

}