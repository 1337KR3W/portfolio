import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from "src/app/components/about-me/about-me.component";
import { SkillsComponent } from "src/app/components/skills/skills.component";
import { ProjectsComponent } from "src/app/components/projects/projects.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [AboutMeComponent, SkillsComponent, ProjectsComponent],
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
