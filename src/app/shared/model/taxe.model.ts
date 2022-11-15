
/**
 * Conditional Tax 
 * fieldName is the Product attribut name  (category , isImported ...)
 * fieldValue is  the attribut value , to filter only Product concerned by tis Tax
 * 
 * example : we want applying 10% Tax for BOOK products
 * Tax structure would be {value:10 ,fieldName:category:fieldValue:'BOOK' }
 * 
 * 
 */
export interface Taxe 
{
    value: number // value between 0 and 100
    fieldName : string 
    fieldValue : string | boolean | number
}

