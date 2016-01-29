import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeaderComponent} from '../header/header.component';
import {MainComponent} from '../main/main.component';
import {FooterComponent} from '../footer/footer.component';
import {CategoryComponent} from '../category/category.component';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './components/app/app.component.html'
  //encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  { path: '/', component: MainComponent, as: 'Main' },
  { path: '/category', component: CategoryComponent, as: 'Category' },
  { path: '/**', redirectTo: ['Main'] }
])
export class AppComponent {

  constructor() {

  }
}
