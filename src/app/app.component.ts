import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    
    this.products = [
      new Product(
        'Shoes',
        'A black running shoes',
        'https://images-na.ssl-images-amazon.com/images/I/71gtOLUHYsL._UX395_.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        29.99
      ),
      new Product(
        'blue jacket',
        'a blue jacket',
        'https://i.pinimg.com/originals/d3/8a/b5/d38ab549a1f86b158993cf24c30a43f9.jpg',
        ['Women', 'Apparel', 'Jackets'],
        29.99
      ),
      new Product(
        'hat',
        'a nice hat',
        'https://cdn.shopify.com/s/files/1/1245/8511/products/QT-FlexFit_BlkOnBlk_Front_1250850_1024x1024.jpg?v=1460866352',
        ['Men', 'Accessories', 'hats'],
        29.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product Selected', product);
  }
}
