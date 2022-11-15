import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/shared/model/product.model';
import { Taxe } from 'src/app/shared/model/taxe.model';
import { ProductService } from 'src/app/shared/service/http/product.service';
import { TaxeService } from 'src/app/shared/service/http/taxes.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productDataModel: Observable<Product[]> = of([]);
  taxesDataModel:  Observable<Taxe[]> = of([]);

  unsubscribe$: Subject<void> = new Subject<void>();
  showInvoice: boolean = false;
  
  constructor(private productService: ProductService,private taxesService: TaxeService) {

  }

  ngOnInit() {

    this.productDataModel = this.productService.getProducts().pipe(takeUntil(this.unsubscribe$));
    this.taxesDataModel = this.taxesService.getTaxes().pipe(takeUntil(this.unsubscribe$));

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
