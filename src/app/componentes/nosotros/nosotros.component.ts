import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from '../headerglobal/headerglobal.component';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonIcon,
    CommonModule,
    HeaderGlobalComponent 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NosotrosComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}

