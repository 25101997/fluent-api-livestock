import { Component } from '@angular/core';
import { NavigationService } from './features/livestock/services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp-fe';
  constructor(public nav: NavigationService) {}
}
