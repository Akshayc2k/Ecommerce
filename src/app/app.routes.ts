import { Routes } from '@angular/router';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { LoginComponent } from './login/login.component';
import { RentalsComponent } from './rentals/rentals.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductCardsComponent },
    { path: 'rentals', component: RentalsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategorySectionComponent },
];
