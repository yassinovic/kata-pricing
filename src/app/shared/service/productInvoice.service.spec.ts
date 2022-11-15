import { TestBed, inject } from '@angular/core/testing';
import { ProductCategory } from '../enums/product-category.enum';
import { Product } from '../model/product.model';
import { Taxe } from '../model/taxe.model';
import { ProductInvoiceService } from './productInvoice.service';

const TAXES: Taxe[] = [
    {
        "value": 10, "fieldName": "category", "fieldValue": "BOOK"
    },
    {
        "value": 20, "fieldName": "category", "fieldValue": "OTHER"
    },
    {
        "value": 5, "fieldName": "isImported", "fieldValue": true
    }
];

describe('ProductInvoiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductInvoiceService]
        });
    });


    it('Cart1 should return taxes = 5.53€ and  Total = 48.05€', inject(
        [ProductInvoiceService], (service: ProductInvoiceService) => {
            service.clearCart();

            const product1: Product = {
                id: "1",
                name: "livre",
                price: 12.49,
                category: ProductCategory.BOOK,
                isImported: false
            };

            const product2: Product = {
                id: "2",
                name: "CD",
                price: 14.99,
                category: ProductCategory.OTHER,
                isImported: false
            };

            const product3: Product = {
                id: "3",
                name: "Chocolat",
                price: 0.85,
                category: ProductCategory.ESSENTIAL,
                isImported: false
            };

            service.addProductsList(product1, 2, TAXES);
            service.addProductsList(product2, 1, TAXES);
            service.addProductsList(product3, 3, TAXES);


            expect(service.subject.value.totalTax).toBe(5.53);
            expect(service.subject.value.totalTTC).toBe(48.05);

        }));


    it('Cart2 should return taxes = 36.65€  and Total = 199.15€', inject(
        [ProductInvoiceService], (service: ProductInvoiceService) => {

            service.clearCart();
            const product1: Product = {
                id: "1",
                name: "Reeses",
                category: ProductCategory.ESSENTIAL,
                description: "American Chocolat",
                price: 10,
                isImported: true
            };

            const product2: Product = {
                id: "2",
                name: "One Million",
                category: ProductCategory.OTHER,
                description: "parfum Paco Rabanne for men",
                price: 47.5,
                isImported: true

            };



            service.addProductsList(product1, 2, TAXES);
            service.addProductsList(product2, 3, TAXES);


            expect(service.subject.value.totalTax).toBe(36.65);
            expect(service.subject.value.totalTTC).toBe(199.15);

        }));

    it('Cart3 should return taxes = 18.98€  and Total = 145,7€', inject(
        [ProductInvoiceService], (service: ProductInvoiceService) => {

            service.clearCart();
            const product1: Product = {
                id: "1",
                name: "Dior Sauvage",
                category: ProductCategory.OTHER,
                price: 27.99,
                isImported: true

            };

            const product2: Product = {
                id: "2",
                name: "Jean Paul Gaultier",
                category: ProductCategory.OTHER,
                price: 18.99,
                isImported: false
            };

            const product3: Product = {
                id: "3",
                name: "Mig Spray",
                category: ProductCategory.ESSENTIAL,
                price: 9.75,
                isImported: false
            };

            const product4: Product = {
                id: "4",
                name: "Swiss Miss",
                category: ProductCategory.ESSENTIAL,
                price: 11.25,
                isImported: true
            };

            service.addProductsList(product1, 2, TAXES);
            service.addProductsList(product2, 1, TAXES);
            service.addProductsList(product3, 3, TAXES);
            service.addProductsList(product4, 2, TAXES);


            expect(service.subject.value.totalTax).toBe(18.98);
            expect(service.subject.value.totalTTC).toBe(145.7);

        }));


});

