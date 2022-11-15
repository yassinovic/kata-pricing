import { Product, ProductCart } from "./product.model";
import { Taxe } from "./taxe.model";

export interface Invoice {
    products: ProductCart[];
    taxes: Taxe[];
}

export interface InvoiceDataModel {
    products: InvoiceItem[];
    totalTTC: number;
    totalTax: number;
}

export interface InvoiceItem {
    product: Product;
    quantity: number;
    priceTTC: number;
    taxes: number;
}

export enum InvoiceDisplayedColumn {
    NAME = "Name",
    QUANTITY = "Quantity",
    PRICE_U = "Unit Price",
    TAXE = "Taxes",
    PRICETTC = "price TTC",
}

