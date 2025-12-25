import { Component, inject, OnInit } from '@angular/core';
import { AboutMeComponent } from "src/app/components/about-me/about-me.component";
import { SkillsComponent } from "src/app/components/skills/skills.component";
import { ProjectsComponent } from "src/app/components/projects/projects.component";
import { IonContent } from "@ionic/angular/standalone";
import { SectionService } from 'src/app/services/section/section-service';
import { SectionCard } from 'src/app/models/card/section-card/section-card.model';
import { SectionsComponent } from "src/app/components/sections/sections.component";
import { WorksComponent } from "src/app/components/works/works.component";
import { CertsAndEducationComponent } from "src/app/components/certs-and-education/certs-and-education.component";
import { CubeBackgroundComponent } from "src/app/components/cube-background/cube-background.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [AboutMeComponent, SkillsComponent, ProjectsComponent, IonContent, SectionsComponent, WorksComponent, CertsAndEducationComponent, CubeBackgroundComponent],
})

export class MainPageComponent implements OnInit {

  private sectionService = inject(SectionService);
  sections: Record<string, SectionCard> = {};
  ngOnInit(): void {
    const allSections = this.sectionService.getSections();
    this.sections['skills'] = allSections.find(s => s.id === 1)!;
    this.sections['projects'] = allSections.find(s => s.id === 2)!;
    this.sections['work-experience'] = allSections.find(s => s.id === 3)!;
    this.sections['certs-and-education'] = allSections.find(s => s.id === 4)!;
  }

}
