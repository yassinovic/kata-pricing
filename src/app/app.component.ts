import { Component } from '@angular/core';
import { MENUS } from './shared/constants/menu-route.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menus = MENUS;

  constructor()
  {
  }

 
 
}
