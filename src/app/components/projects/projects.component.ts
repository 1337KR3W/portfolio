import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonCardSubtitle, IonButton, IonIcon } from "@ionic/angular/standalone";
import { Project } from 'src/app/models/project/project.model';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonCardSubtitle, IonButton, IonIcon],
})
export class ProjectsComponent {

  @Input({ required: true }) data: any[] = [];


}
