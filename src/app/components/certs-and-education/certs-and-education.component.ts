import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonCol, IonGrid, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-certs-and-education',
  templateUrl: './certs-and-education.component.html',
  styleUrls: ['./certs-and-education.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonCol, IonGrid, IonRow],
})
export class CertsAndEducationComponent {

  @Input({ required: true }) data: any[] = [];
}
