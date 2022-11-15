import { InvoiceItem } from "../model/invoice.model";
import { Product } from "../model/product.model";
import { Taxe } from "../model/taxe.model";

export default class PricingUtils {

    static calculTaxes(product: Product, quantity: number, taxes: Taxe[]): InvoiceItem {
        const invoiceItem: InvoiceItem = {  product:product, quantity: quantity, priceTTC: 0,taxes:0 };
        const prixHT = (invoiceItem.product.price*invoiceItem.quantity);
        let taxSum=0;
        taxes.forEach((tax:Taxe) => {
            const productValue = product[tax.fieldName as keyof typeof product] ;
            const isTaxApplicable = productValue  == <any>tax.fieldValue;

            if (isTaxApplicable) {
                let prixTax:number = (prixHT * tax.value / 100);
                taxSum +=prixTax;
            }
        });
        invoiceItem.priceTTC = PricingUtils.roundTaxFiveCent(+prixHT +taxSum);
        invoiceItem.taxes =+(invoiceItem.priceTTC - prixHT).toFixed(2);
        return invoiceItem;
    }


    static roundTaxFiveCent(val: number): number { return +(Math.ceil(val * 20) / 20).toFixed(2); }
}

