import { Component, inject, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/cert-and-education/cert.model';
import { CertsAndEducationService } from 'src/app/services/certs-and-education/certs-and-education-service';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonCol, IonGrid, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-certs-and-education',
  templateUrl: './certs-and-education.component.html',
  styleUrls: ['./certs-and-education.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon, IonCol, IonGrid, IonRow],
})
export class CertsAndEducationComponent implements OnInit {

  private readonly certService = inject(CertsAndEducationService);
  certsAndEducation: Certification[] = [];
  constructor() { }

  ngOnInit() {
    this.certsAndEducation = this.certService.getCertifications();
  }

}
