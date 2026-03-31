import { Component, inject, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { SectionService } from 'src/app/services/section/section-service';
import { SectionCard } from 'src/app/models/section.model';
import { SectionsComponent } from "src/app/components/sections/sections.component";
import { CubeBackgroundComponent } from "src/app/components/cube-background/cube-background.component";
import { FloatingButtonsComponent } from "src/app/components/floating-buttons/floating-buttons.component";
import { HeroSectionComponent } from "src/app/components/hero-section/hero-section.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { HeaderMobileComponent } from "src/app/components/header-mobile/header-mobile.component";
import { NgComponentOutlet } from '@angular/common';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [IonContent, SectionsComponent, CubeBackgroundComponent, FloatingButtonsComponent, HeroSectionComponent, HeaderComponent, HeaderMobileComponent, NgComponentOutlet],
})

export class MainPageComponent implements OnInit {

  private readonly sectionService = inject(SectionService);
  heroData!: SectionCard;
  sections: any[] = [];

  ngOnInit(): void {
    const allSections = this.sectionService.getSections();
    this.heroData = this.sectionService.getHeroData();
    this.sections = allSections;
  }

}
