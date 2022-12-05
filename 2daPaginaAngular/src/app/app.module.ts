import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ComponenteCComponent } from './componente-c/componente-c.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    ComponenteCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
