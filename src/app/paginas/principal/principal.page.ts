import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/headerglobal/headerglobal.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderGlobalComponent]
   ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
      imagen:"assets/img/KTM-RC.jpg"
     },
     {
      id: 9,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"SUPER Duke-1290",
      especificaciones: "Motor 1290 cc V-Twin, potencia 180 hp, MTC, ABS, modos de manejo, suspensión WP, frenos Brembo, peso 189 kg.",
      imagen:"assets/img/ktm-super-duke-1290-r-2017-negro-con-gris-6fad2b.png"
     },
     {
      id: 10,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Adventure 1090-2017",
      especificaciones: "Motor 1050-1090 cc, potencia 125 hp, suspensión WP largo recorrido, ABS off-road, modos de manejo, peso 205 kg.",
      imagen:"assets/img/ktm-1090-adventure-2017.jpg"
     }, 

   ]

 productosfiltrados = [...this.productos ];  
  
 constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }



  irktm(producto:any){

    this.router.navigate(['/ktm'], { queryParams:  producto });
  }


 filtrar(event: any) {
   const texto = (event.target.value || '' ).toLowerCase().trim();

   if (texto  === '' ) {
    this.productosfiltrados = [...this.productos ];
    return;
   }

   this.productosfiltrados = this.productos.filter(
    p=>p.titulo.toLowerCase().includes(texto) ||
     p.descripcion.toLowerCase().includes(texto) || 
     p.precio.toString().includes(texto) 
    );
  }
}

