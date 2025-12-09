import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/headerglobal/headerglobal.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { VentanaEmergenteComponent } from 'src/app/componentes/ventana-emergente/ventana-emergente.component';
import { ModalController } from '@ionic/angular/standalone';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderGlobalComponent, FooterGlobalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {

  productos = [
    {
      id: 1,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Motocross Montañera",
      especificaciones: "Motor 250 cc, refrigeración líquida, horquilla invertida, monoshock regulable, transmisión 5 velocidades, peso 110 kg.",        
      imagen:"assets/img/ktm creoos.jpg"
    },
    {
      id: 2,
      titulo:"KTM Motors",
      precio:4000,
      descripcion:"Doble Proposito Adventure",
      especificaciones: "Motor 390-450 cc, uso on/off road, tanque 14-15 L, suspensión de largo recorrido, ABS doble canal, peso 160-170 kg.",
      imagen:"assets/img/ktm-adventure-.jpg"
    },
    {
      id: 3,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Deportiva",
      especificaciones: "Motor 390-600 cc, refrigeración líquida, frenos ABS, suspensión deportiva rígida, peso 150 kg.",
      imagen:"assets/img/KTM-Duke-.jpg" 
    },
    {
      id: 4,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Duke-350",
      especificaciones: "Motor 350 cc, potencia 35-40 hp, refrigeración líquida, frenos ABS, tablero TFT, peso 150-155 kg.",
      imagen:"assets/img/KTM-RC.jpg"
    },
    {
      id: 5,
      titulo:"KTM Motors",
      precio:2500,
      descripcion:"Super Duke-250",
      especificaciones: "Motor 250 cc, potencia 30 hp, caja 6 velocidades, chasis trellis, frenos ABS, peso 148 kg.",
      imagen:"assets/img/KTM-SUPER.jpg"
    },
    {
      id: 6,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"ktm-RC8",
      especificaciones: "Motor 1190 cc V-Twin, potencia 170 hp, suspensión WP, frenos Brembo ABS, chasis tubular, peso 183 kg.",
      imagen:"assets/img/KTM-RC8.jpg"
    },
    {
      id: 7,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Mini croos 150",
      especificaciones: "Motor 150 cc, off-road juvenil, arranque eléctrico y patada, suspensión off-road, transmisión 5 velocidades, peso 90 kg.",
      imagen:"assets/img/KTM-MINICROOS.webp"
    },
    {
      id: 8,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Duke RC-450",
      especificaciones: "Motor 450 cc, potencia 50-55 hp, frenos ABS, suspensión deportiva, peso 155 kg.",
      imagen:"assets/img/moto electrica ktm-125.jpg"
    },
    {
      id: 9,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"SUPER Duke-1290",
      especificaciones: "Motor 1290 cc V-Twin, potencia 180 hp, MTC, ABS, modos de manejo, suspensión WP, frenos Brembo, peso 189 kg.",
      imagen:"assets/img/MY24-KTM-1390-SUPER-DUKE-R_EVO-11-768x512.jpg"
    },
    {
      id: 10,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Adventure 1090-2017",
      especificaciones: "Motor 1050-1090 cc, potencia 125 hp, suspensión WP largo recorrido, ABS off-road, modos de manejo, peso 205 kg.",
      imagen:"assets/img/ktm-1090-adventure-2017.jpg"
    },

    {
      id: 11,
      titulo:"KTM Motors",
      precio:3800,
      descripcion:"KTM EXC 300 Enduro",
      especificaciones:"Motor 300 cc 2T, arranque eléctrico, suspensión WP Xplor, peso 103 kg.",
      imagen:"assets/img/ktm_Stoked__87867.jpg"
    },
    {
      id: 12,
      titulo:"KTM Motors",
      precio:4200,
      descripcion:"KTM SX-F 450",
      especificaciones:"Motor 450 cc 4T, embrague hidráulico, suspensión WP AER, peso 100 kg.",
      imagen:"assets/img/KTM-450-Rally-Replica-main.jpg"
    },
    {
      id: 13,
      titulo:"KTM Motors",
      precio:3100,
      descripcion:"KTM Duke 200 Sport",
      especificaciones:"Motor 200 cc, inyección electrónica, ABS, tablero digital TFT.",
      imagen:"assets/img/315762__KTM-200-DUKE.jpg"
    },
    {
      id: 14,
      titulo:"KTM Motors",
      precio:5500,
      descripcion:"KTM Super Adventure 1290",
      especificaciones:"Motor 1301 cc, potencia 160 hp, radar ACC, modos de manejo, suspensión electrónica.",
      imagen:"assets/img/ktm-1190-adventure-r-price-specs-malaysia-1.jpg"
    },
    {
      id: 15,
      titulo:"KTM Motors",
      precio:2800,
      descripcion:"KTM RC 200",
      especificaciones:"Motor 200 cc, chasis tubular, ABS, asiento deportivo, peso 137 kg.",
      imagen:"assets/img/ktm-rc-125-orange-with-black.jpg"
    },
    {
      id: 16,
      titulo:"KTM Motors",
      precio:4700,
      descripcion:"KTM 690 Enduro R",
      especificaciones:"Motor 690 cc, inyección, ABS off-road, suspensión WP Xplor.",
      imagen:"assets/img/KTM-690-SMC-R-2023.jpg"
    },
    {
      id: 17,
      titulo:"KTM Motors",
      precio:4500,
      descripcion:"KTM Duke 690",
      especificaciones:"Motor 690 cc monocilíndrico, ABS, quickshifter, peso 148 kg.",
      imagen:"assets/img/duke 690 rs -004.jpg"
    },
    {
      id: 18,
      titulo:"KTM Motors",
      precio:5200,
      descripcion:"KTM RC 390 2024",
      especificaciones:"Motor 373 cc, ABS en curva, control de tracción, TFT, peso 155 kg.",
      imagen:"assets/img/2024-ktm-rc-390-studio-blue-right-side-1024x576.jpg"
    },
    {
      id: 19,
      titulo:"KTM Motors",
      precio:2600,
      descripcion:"KTM SX 125 2T",
      especificaciones:"Motor 125 cc 2 tiempos, ultra ligera, suspensión WP XAct.",
      imagen:"assets/img/MY24-KTM-1390-SUPER-DUKE-R_EVO-11-768x512.jpg"
    },
    {
      id: 20,
      titulo:"KTM Motors",
      precio:6000,
      descripcion:"KTM 1290 Super Duke R EVO",
      especificaciones:"Motor 1301 cc, 180 hp, suspensión semi-activa, control anti-wheelie.",
      imagen:"assets/img/493008_BRABUS-1300-R-Edition-23_-Static-images_EU_-Global-e1687093438945-1260x875.jpg"
    }
  ];

  productosfiltrados = [...this.productos];  

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  
  ) { }

  ngOnInit() {}

  irktm(producto:any){
    this.router.navigate(['/ktm'], { queryParams:  producto });
  }

  filtrar(event: any) {
    const texto = (event.target.value || '' ).toLowerCase().trim();

    if (texto === '') {
      this.productosfiltrados = [...this.productos];
      return;
    }

    this.productosfiltrados = this.productos.filter(
      p=>p.titulo.toLowerCase().includes(texto) ||
        p.descripcion.toLowerCase().includes(texto) || 
        p.precio.toString().includes(texto) 
    );
  }

 async verimagengrande(producto: any){
   const modal = await this.modalCtrl.create({
    component: VentanaEmergenteComponent,
    componentProps:{ Imagen: producto.imagen, titulo:producto.titulo },
    cssClass: 'estilo-modal'
   });

   await modal.present();
  } 

  





}
