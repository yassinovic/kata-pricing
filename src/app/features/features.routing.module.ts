import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'product', loadChildren: () => import('../features/product/products.module')
    .then(mod => mod.ProductModule)
},

{
  path: 'deals', loadChildren: () => import('../features/deals/deals.module')
    .then(mod => mod.DealsModule)
},

// otherwise redirect to product
{ path: '**', redirectTo: 'product' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
