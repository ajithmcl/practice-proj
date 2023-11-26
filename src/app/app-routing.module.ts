import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from 'src/app/component/child/child.component';
import { DataTableComponent } from 'src/app/component/data-table/data-table.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { MemberlistComponent } from 'src/app/component/memberlist/memberlist.component';
import { ParentComponent } from 'src/app/component/parent/parent.component';
import { AvailableseatsComponent } from './selection/availableseats/availableseats.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { SingupComponent } from './component/singup/singup.component';
import { TravelDetailsComponent } from './component/travel-details/travel-details.component';
import { LoginComponent } from './component/login/login.component';
import { FormArrayComponent } from './component/form-array/form-array.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { VariantDetailsComponent } from './component/variant-details/variant-details.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { ManufactureDetailsComponent } from './component/manufacture-details/manufacture-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent}, 
  {path:"table", component:DataTableComponent},
  {path:"available", component:AvailableseatsComponent},
  {path:'child', component:ChildComponent},
  {path:'parent',component:ParentComponent},
  {path:"memberlist",component:MemberlistComponent},
  // {path:"header",component:HeaderComponent},
  {path:"products",component:ProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"home",component:HomeComponent},
  {path:"seats",component:AvailableseatsComponent},
  {path:"SignUp",component:SingupComponent},
  {path:"travel",component:TravelDetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"array",component:FormArrayComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"product-details",component:ProductDetailsComponent,children:[
    {component:AddproductComponent,path:"create"},
    {component:AddproductComponent,path:"edit/:id"}
  ]},
  {path: "variant", component:VariantDetailsComponent},
  {path:"manu-details",component:ManufactureDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
