import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { FeaturesModule } from './features/features.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers:[{ provide: LOCALE_ID,
    useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
