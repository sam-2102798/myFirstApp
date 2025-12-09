
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonContent, IonTitle, IonButton, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ventana-emergente',
  templateUrl: './ventana-emergente.component.html',
  styleUrls: ['./ventana-emergente.component.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, IonTitle, IonButton, IonHeader, IonToolbar],
})
export class VentanaEmergenteComponent  implements OnInit {
  @Input() Imagen: string = '';
  @Input() titulo: string = '';

  constructor( 
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}



  CerrarModal() {
    this.modalCtrl.dismiss();
  }

}