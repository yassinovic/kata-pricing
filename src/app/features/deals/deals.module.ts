import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DealsComponent } from "./deals.component";


const routes: Routes = [
    { path: '', component: DealsComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
        DealsComponent,
     ]
 })
export class DealsModule { }