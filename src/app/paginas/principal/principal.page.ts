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
      descripcion:"motocross",
      imagen:"assets/img/ktm creoos.jpg"
     },
     {
      id: 2,
      titulo:"KTM Motors",
      precio:4000,
      descripcion:"motocross",
      imagen:"assets/img/ktm-adventure-.jpg"
     },
     {
      id: 3,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"motocross",
      imagen:"assets/img/ktm.dible.jpg" 
     },
     {
      id: 4,
      titulo:"KTM Motors",
      precio:3500,
      descripcion:"motocross",
      imagen:"assets/img/KTM-Duke-.jpg"
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
