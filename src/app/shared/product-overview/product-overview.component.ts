import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [FlexLayoutModule, NgFor, CurrencyPipe, RouterLink],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss'
})
export class ProductOverviewComponent {
  @Input('product') product!: ProductModel;
  constructor() { }
}
