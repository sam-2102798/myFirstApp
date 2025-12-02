import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerglobal',
  templateUrl: './headerglobal.component.html',
  styleUrls: ['./headerglobal.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons
  ]
})
export class HeaderGlobalComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  volverPrincipal() {
    this.router.navigate(['/principal']);
  }
}