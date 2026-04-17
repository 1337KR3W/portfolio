import { Component, Input } from '@angular/core';
import { ProfileData } from '../../models/profile-data';
import { SectionCard } from '../../models/section.model';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {

  @Input({ required: true }) data!: SectionCard<ProfileData>;

}
