import { Component, inject, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonCardSubtitle, IonButton, IonIcon } from "@ionic/angular/standalone";
import { Project } from 'src/app/models/project/project.model';
import { ProjectService } from 'src/app/services/project/project-service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonCardSubtitle, IonButton, IonIcon],
})
export class ProjectsComponent implements OnInit {

  private readonly projectService = inject(ProjectService);
  projects: Project[] = [];

  constructor() { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
