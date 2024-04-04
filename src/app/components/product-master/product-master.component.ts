import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductModel, ProductResponseModel } from '../../models/product.model';
import { ProductOverviewComponent } from '../../shared/product-overview/product-overview.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-master',
  standalone: true,
  imports: [ProductOverviewComponent],
  templateUrl: './product-master.component.html',
  styleUrl: './product-master.component.scss'
})
export class ProductMasterComponent implements OnInit {
  category: string = '';
  productResponse: ProductResponseModel = {} as ProductResponseModel;
  constructor(private readonly actRoute: ActivatedRoute,
    private readonly productSvc: ProductService) { }
  ngOnInit(): void {
    this.actRoute.params.subscribe(p => {
      this.category = p['category'];
      this.loadProductsByCategory(this.category);
    });
  }

  loadProductsByCategory(category: string) {
    this.productSvc.getProductsByCategoryName(category).subscribe((productRes: ProductResponseModel) => {
      this.productResponse = productRes;
      console.log(this.productResponse);
    });
  }

}
