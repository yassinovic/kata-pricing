

import { NgModule } from "@angular/core";
import { DealsModule } from "./deals/deals.module";
import { FeaturesRoutingModule } from "./features.routing.module";
import { ProductModule } from "./product/products.module";

@NgModule({
    imports: [
        FeaturesRoutingModule,
        ProductModule,
        DealsModule
    ],
    declarations:[],
    exports: [
    ]
})
export class FeaturesModule { }
