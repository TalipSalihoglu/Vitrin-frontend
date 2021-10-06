import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded=false;

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProudctsByCategory(params["categoryId"]);
      }
      else{
        this.getProudcts()
      }
    });
    
  }

  getProudcts(){
    this.productService.getProudcts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true
    })
  }
  getProudctsByCategory(categoryId:number){
    this.productService.getProudctsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true
    })
  }

}
