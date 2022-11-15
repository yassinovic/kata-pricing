import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InvoiceDataModel, InvoiceDisplayedColumn } from 'src/app/shared/model/invoice.model';
import { ProductInvoiceService } from 'src/app/shared/service/productInvoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoiceDataModel: Observable<InvoiceDataModel> = of();

  displayedColumns: string[] = Object.values(InvoiceDisplayedColumn);

  constructor(private productInvoiceService:ProductInvoiceService) {

  }

  ngOnInit() {
    this.invoiceDataModel = this.productInvoiceService.getCartProduct();
  }


  resetBtn()
  {
    this.productInvoiceService.clearCart();
  }


}
