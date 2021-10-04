import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 = { productId: 1, productName: "bardak", categoryId: 1, unitPrice: 95 }
  product2 = { productId: 2, productName: "bıçak", categoryId: 2, unitPrice: 76 }
  product3 = { productId: 3, productName: "tabak", categoryId: 3, unitPrice: 57 }
  product4 = { productId: 4, productName: "çatal", categoryId: 4, unitPrice: 38 }
  product5 = { productId: 5, productName: "kaşık", categoryId: 5, unitPrice: 19 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5]
  constructor() { }

  ngOnInit(): void {
  }

}
