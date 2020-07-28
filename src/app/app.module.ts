import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ProductsComponent, ProductViewComponent, ProductEditComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
