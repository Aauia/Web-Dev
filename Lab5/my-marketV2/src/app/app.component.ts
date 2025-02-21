import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,RouterOutlet, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/jake.svg" alt="logo" aria-hidden="true" />
      </header>
      <ul>
      <li>
    <a [routerLink]="['home']">Home</a>
  </li>
  <li>
    <a [routerLink]="['categories']">Categories</a>
  </li>
</ul>
      <section class="content">
      <h1>App root component</h1>
      
<router-outlet />
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
