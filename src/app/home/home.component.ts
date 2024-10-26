import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { CategorySectionComponent } from '../category-section/category-section.component';
import { RentalsComponent } from '../rentals/rentals.component';
import { ProductCardsComponent } from '../product-cards/product-cards.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,BannerComponent,CategorySectionComponent,RentalsComponent,ProductCardsComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
