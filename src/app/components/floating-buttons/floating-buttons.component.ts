import { Component, inject } from '@angular/core';
import { IonFab, IonFabButton, IonIcon, IonContent, IonFabList } from "@ionic/angular/standalone";
import { ThemeService } from '../../services/theme/theme-service';

@Component({
  selector: 'app-floating-buttons',
  templateUrl: './floating-buttons.component.html',
  styleUrls: ['./floating-buttons.component.scss'],
  imports: [IonFab, IonFabButton, IonIcon, IonContent, IonFabList],
})
export class FloatingButtonsComponent {

  private readonly themeService = inject(ThemeService);

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

}
