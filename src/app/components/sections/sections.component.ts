import { Component, Input } from '@angular/core';
import { SectionCard } from 'src/app/models/section.model';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class SectionsComponent {

  @Input({ required: true }) section!: SectionCard;


}
