import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "../../components/components.module";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsComponent } from "./products.component";


const routes: Routes = [
    { path: '', component: ProductsComponent }
];
@NgModule({
    imports: [CommonModule,FormsModule,HttpClientModule,ComponentsModule , RouterModule.forChild(routes)],
    declarations: [
        ProductsComponent,
        ProductCardComponent
    ]
})
export class ProductModule { }