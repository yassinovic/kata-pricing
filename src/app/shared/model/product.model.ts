import { ProductCategory } from "../enums/product-category.enum";

/**
 * Product 
 */
export interface Product 
{
    id:string;
    name:string;
    price:number;
    description?:string;
    category:ProductCategory;
    isImported:boolean;
}


export interface ProductCart 
{
    product:Product;
    quantity:number;
}

