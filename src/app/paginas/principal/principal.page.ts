import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
   ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
  productos = [
    {
      id: 1,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Motocross Montañera",
      imagen:"assets/img/ktm creoos.jpg"
     },
     {
      id: 2,
      titulo:"KTM Motors",
      precio:4000,
      descripcion:"Doble Proposito Adventure",
      imagen:"assets/img/ktm-adventure-.jpg"
     },
     {
      id: 3,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Deportiva",
      imagen:"assets/img/ktm.dible.jpg" 
     },
     {
      id: 4,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Duke-350",
      imagen:"assets/img/KTM-Duke-.jpg"
     },
     {
      id: 5,
      titulo:"KTM Motors",
      precio:2500,
      descripcion:"Super Duke-250",
      imagen:"assets/img/KTM-SUPER.jpg"
     },
     {
      id: 6,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"ktm-RC8",
      imagen:"assets/img/KTM-RC8.jpg"
     },
     {
      id: 7,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Mini croos 150",
      imagen:"assets/img/KTM-MINICROOS.webp"
     },
     {
      id: 8,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Duke RC-450",
      imagen:"assets/img/KTM-RC.jpg"
     },
     {
      id: 9,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"SUPER Duke-1290",
      imagen:"assets/img/ktm-super-duke-1290-r-2017-negro-con-gris-6fad2b.png"
     },
     {
      id: 10,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"Adventure 1090-2017",
      imagen:"assets/img/ktm-1090-adventure-2017.jpg"
     },
  
  
  
  
  
  


  
   ]
  
  
 constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }



  irktm(producto:any){

    this.router.navigate(['/ktm'], { queryParams:  producto });
  }


}
