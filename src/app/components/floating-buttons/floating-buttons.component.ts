import { Component, OnInit } from '@angular/core';
import { IonFab, IonFabButton, IonIcon, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-floating-buttons',
  templateUrl: './floating-buttons.component.html',
  styleUrls: ['./floating-buttons.component.scss'],
  imports: [IonFab, IonFabButton, IonIcon, IonContent],
})
export class FloatingButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
