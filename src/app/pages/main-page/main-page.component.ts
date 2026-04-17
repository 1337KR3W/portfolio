import { Component, inject, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { SectionService } from '../../services/section/section-service';
import { SectionCard } from '../../models/section.model';
import { SectionsComponent } from '../../components/sections/sections.component';
import { CubeBackgroundComponent } from '../../components/cube-background/cube-background.component';
import { FloatingButtonsComponent } from '../../components/floating-buttons/floating-buttons.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderMobileComponent } from '../../components/header-mobile/header-mobile.component';
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
