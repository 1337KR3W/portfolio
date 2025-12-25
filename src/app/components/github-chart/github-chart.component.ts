import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-github-chart',
  templateUrl: './github-chart.component.html',
  styleUrls: ['./github-chart.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle],
})
export class GithubChartComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
