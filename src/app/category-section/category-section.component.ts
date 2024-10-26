import { Component } from '@angular/core';
import { Category, CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss'
})
export class CategorySectionComponent {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data; // Assign the fetched categories to the variable
    });
  }

}
