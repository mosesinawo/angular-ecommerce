import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListsComponent } from './pages/products-lists/products-lists.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsListsComponent],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecommerce';
}
