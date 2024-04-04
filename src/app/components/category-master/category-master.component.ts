import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgFor, TitleCasePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-category-master',
  standalone: true,
  imports: [FlexLayoutModule, NgFor, TitleCasePipe, MatListModule, MatIconModule,
    MatDividerModule, MatButtonModule, RouterLink],
  templateUrl: './category-master.component.html',
  styleUrl: './category-master.component.scss'
})
export class CategoryMasterComponent implements OnInit {

  categories: string[] = [];
  constructor(private readonly productSvc: ProductService) { }
  ngOnInit(): void {
    this.productSvc.getProductCategories().subscribe((cats: string[]) => {
      console.log(cats);
      this.categories = cats;
    });
  }

 

}
