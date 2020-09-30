import { fader, slider, transformer, stepper } from './route-animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // fader,
    slider,
    // transformer,
    // stepper
  ]
})
export class AppComponent {
  title = 'LIGY';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

