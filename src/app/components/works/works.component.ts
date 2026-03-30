import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { Work } from 'src/app/models/work/work.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol],
})
export class WorksComponent {

  @Input({ required: true }) data: any[] = [];

}
