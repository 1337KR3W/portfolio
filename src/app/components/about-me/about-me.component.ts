import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton } from "@ionic/angular/standalone";
import { DynamicSection } from '../../models/section.model';
import { ProfileData } from '../../models/profile-data';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton],
})
export class AboutMeComponent implements DynamicSection<ProfileData> {

  @Input({ required: true }) data!: ProfileData;
  activeTab: string = 'skills';
  segmentChanged(event: any) {
    this.activeTab = event.detail.value;
  }

}
