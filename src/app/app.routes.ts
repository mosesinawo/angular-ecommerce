import { Routes } from '@angular/router';
import { ProductsListsComponent } from './pages/products-lists/products-lists.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsListsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
