import { Component, inject, OnInit } from '@angular/core';
import { AboutMeComponent } from "src/app/components/about-me/about-me.component";
import { SkillsComponent } from "src/app/components/skills/skills.component";
import { ProjectsComponent } from "src/app/components/projects/projects.component";
import { IonContent } from "@ionic/angular/standalone";
import { SkillService } from 'src/app/services/skill/skill-service';
import { Skill } from 'src/app/models/skill/skill.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [AboutMeComponent, SkillsComponent, ProjectsComponent, IonContent],
})

export class MainPageComponent {



}
