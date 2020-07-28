import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
const routes:Routes = [
 {path:'products', component:ProductsComponent},
 {path:'product-view', component:ProductViewComponent},
 {path:'product-edit', component:ProductEditComponent},
 {path:'', component:HomeComponent, pathMatch:'full'},
 {path:'**', redirectTo:'home', pathMatch:'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule    
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }