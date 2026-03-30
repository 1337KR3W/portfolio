import { Component, inject, OnInit } from '@angular/core';
import { AboutMeComponent } from "src/app/components/about-me/about-me.component";
import { SkillsComponent } from "src/app/components/skills/skills.component";
import { ProjectsComponent } from "src/app/components/projects/projects.component";
import { IonContent } from "@ionic/angular/standalone";
import { SectionService } from 'src/app/services/section/section-service';
import { SectionCard } from 'src/app/models/section-card/section-card.model';
import { SectionsComponent } from "src/app/components/sections/sections.component";
import { WorksComponent } from "src/app/components/works/works.component";
import { CertsAndEducationComponent } from "src/app/components/certs-and-education/certs-and-education.component";
import { CubeBackgroundComponent } from "src/app/components/cube-background/cube-background.component";
import { GithubChartComponent } from "src/app/components/github-chart/github-chart.component";
import { FloatingButtonsComponent } from "src/app/components/floating-buttons/floating-buttons.component";
import { HeroSectionComponent } from "src/app/components/hero-section/hero-section.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { HeaderMobileComponent } from "src/app/components/header-mobile/header-mobile.component";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [AboutMeComponent, SkillsComponent, ProjectsComponent, IonContent, SectionsComponent, WorksComponent, CertsAndEducationComponent, CubeBackgroundComponent, GithubChartComponent, FloatingButtonsComponent, HeroSectionComponent, HeaderComponent, HeaderMobileComponent],
})

export class MainPageComponent implements OnInit {

  private readonly sectionService = inject(SectionService);
  heroData!: SectionCard;
  sections: SectionCard[] = [];

  ngOnInit(): void {
    const allSections = this.sectionService.getSections();
    this.heroData = this.sectionService.getHeroData();
    this.sections = allSections;
  }

}
