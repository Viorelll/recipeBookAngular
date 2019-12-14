import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-undemy';
  loadedFeauture = 'recipe';

  onNavigate(feauture: string) {
    this.loadedFeauture = feauture;
  }
}