import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ktm',
  templateUrl: './ktm.page.html',
  styleUrls: ['./ktm.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class KtmPage implements OnInit {

  producto: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.producto = params;
    });
  }

}
