import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { Taxe } from 'src/app/shared/model/taxe.model';
import { ProductInvoiceService } from 'src/app/shared/service/productInvoice.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product:Product = {} as Product;
  @Input() taxes:Taxe[] = [];

  quantity:number = 1;
 
  constructor(private productInvoiceService:ProductInvoiceService) {

  }

  ngOnInit() {
  }

  addProduct()
  {
   this.productInvoiceService.addProductsList(this.product,this.quantity,this.taxes);
  }

}
