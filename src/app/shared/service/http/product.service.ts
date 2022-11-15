import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { HttpClient } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class ProductService {


    constructor(private http: HttpClient) { }


    getProducts(): Observable<Product[]> {
        /*
        this method is mocked as rest api is not available 
        const url = this.baseUrl+'api/products';    
        return this.http.get<Product[]>(url);*/

        return this.http.get<Product[]>('assets/mocks/products.json')

    }


}