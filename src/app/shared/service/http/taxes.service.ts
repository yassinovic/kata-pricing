import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Taxe } from '../../model/taxe.model';



@Injectable({ providedIn: 'root' })
export class TaxeService {


    constructor(private http: HttpClient) { }


    getTaxes(): Observable<Taxe[]> {
        /*
        this method is mocked as rest api is not available 
        const url = this.baseUrl+'api/taxes';    
        return this.http.get<Taxe[]>(url);*/

        return this.http.get<Taxe[]>('assets/mocks/taxes.json')

    }


}