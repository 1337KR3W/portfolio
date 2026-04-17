import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-github-chart',
  templateUrl: './github-chart.component.html',
  styleUrls: ['./github-chart.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol],
})
export class GithubChartComponent {


  @Input({ required: true }) data: any;



}
