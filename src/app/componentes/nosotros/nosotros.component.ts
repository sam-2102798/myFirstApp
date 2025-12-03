import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonIcon} from '@ionic/angular/standalone'


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,IonButtons, IonIcon]
   ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NosotrosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
