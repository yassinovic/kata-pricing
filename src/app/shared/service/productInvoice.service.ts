import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { InvoiceDataModel, InvoiceItem } from '../model/invoice.model';
import { Product } from '../model/product.model';
import { Taxe } from '../model/taxe.model';
import PricingUtils from '../utils/pricing-utils';
import { TaxeService } from './http/taxes.service';

const INITIAL_VALUE:InvoiceDataModel= {products:[],totalTax:0,totalTTC:0};


@Injectable({ providedIn: 'root' })
export class ProductInvoiceService {


    constructor()
    {
    }
    subject = new BehaviorSubject<InvoiceDataModel>(INITIAL_VALUE);

    public addProductsList(product:Product, quantity:number,taxes:Taxe[]) {
        const currentValue:InvoiceDataModel = this.subject.value;
        const invoiceItem:InvoiceItem = PricingUtils.calculTaxes(product,quantity,taxes);
        currentValue.products.push(invoiceItem);
        this.updateTotals(currentValue);
        this.subject.next(currentValue);
    }

    public getCartProduct(): Observable<any> {
        return this.subject.asObservable();
    }

    public clearCart(): void {
        const currentValue:InvoiceDataModel = this.subject.value;
        currentValue.products=[];
        this.updateTotals(currentValue);
        this.subject.next(currentValue);
    }

    private updateTotals(model:InvoiceDataModel)
    {
        model.totalTTC = model.products.reduce( (acc, product) => { return +(acc + product.priceTTC).toFixed(2); }, 0);
        model.totalTax = model.products.reduce( (acc, product) => { return +(acc + product.taxes).toFixed(2); }, 0);
  
    }
}