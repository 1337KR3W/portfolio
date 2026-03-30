import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-github-chart',
  templateUrl: './github-chart.component.html',
  styleUrls: ['./github-chart.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol],
})
export class GithubChartComponent implements OnInit {


  @Input({ required: true }) data: any;

  ngOnInit(): void {
    console.log(this.data)
  }

}
