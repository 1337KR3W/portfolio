import { Component, Input } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [IonGrid, IonRow, IonCol, IonCard],
})
export class SkillsComponent {
  @Input({ required: true }) data: any[] = [];
}
