import { Component, Input } from '@angular/core';
import { IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { Skill } from 'src/app/models/skill/skill.model';


@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [IonGrid, IonRow, IonCol],
})
export class SkillsComponent {
  @Input({ required: true }) data: any[] = [];
}
