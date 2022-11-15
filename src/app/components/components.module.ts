

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InvoiceComponent } from "./invoice/invoice.component";
import { TopMenuBaromponent } from "./top-men-bar/top-menu-bar.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations:[TopMenuBaromponent,InvoiceComponent],
    exports: [
        TopMenuBaromponent,
        InvoiceComponent
    ]
})
export class ComponentsModule { }
