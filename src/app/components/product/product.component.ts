import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'card m-3';

  constructor() { }

  ngOnInit() {
  }

}
