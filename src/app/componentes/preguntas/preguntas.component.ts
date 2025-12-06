import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonAccordionGroup, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/headerglobal/headerglobal.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonIcon,
    IonLabel,
    CommonModule,
    FormsModule,
    HeaderGlobalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreguntasPage implements OnInit {

  preguntas = [
    {
      icono: 'cart-outline',
      titulo:'¿Cómo puedo realizar una compra?',
      respuesta: 'Puedes obtener nuestros productos visitando nuestra tienda física o usando compras en línea.'
    },
    {
      icono:'shield-checkmark-outline',
      titulo:'¿Los productos cuentan con garantía?',
      respuesta:'Sí, todos los productos cuentan con garantía oficial del fabricante.'
    },
    {
      icono:'cube-outline',
      titulo:'¿Realizan envío a domicilio?',
      respuesta:'Realizamos envíos a nivel nacional mediante Servientrega.'
    }
  ];

  constructor() {}

  ngOnInit() {}

}
