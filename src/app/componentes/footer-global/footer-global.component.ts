import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonIcon} from '@ionic/angular/standalone'


@Component({
  selector: 'app-footer-global',
  templateUrl: './footer-global.component.html',
  styleUrls: ['./footer-global.component.scss'],
   standalone: true,
   imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,IonButtons, IonIcon, RouterModule]
   ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterGlobalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}