import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableComponent } from 'src/app/component/data-table/data-table.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatselectionComponent } from './selection/seatselection/seatselection.component';
import { SeatLayoutComponent } from './selection/seat-layout/seat-layout.component';
import { SelectedseatComponent } from './selection/selectedseat/selectedseat.component';
import { AvailableseatsComponent } from './selection/availableseats/availableseats.component';
import { Router, RouterModule } from '@angular/router';
import { ChildComponent } from 'src/app/component/child/child.component';
import { ParentComponent } from 'src/app/component/parent/parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogboxComponent } from 'src/app/dialogcomponents/dialogbox/dialogbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MemberlistComponent } from 'src/app/component/memberlist/memberlist.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { ApiService } from './services/api.service';
import { CartComponent } from './component/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { SingupComponent } from './component/singup/singup.component';
import { LoadingSpinnerComponent } from './shared/loadin-spiiner/loading-spinner/loading-spinner.component';
import { TravelDetailsComponent } from './component/travel-details/travel-details.component';
import { LoginComponent } from './component/login/login.component';
import { FormArrayComponent } from './component/form-array/form-array.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { VariantDetailsComponent } from './component/variant-details/variant-details.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { MaterialModule } from 'src/material-module/material-module.module';
import { HomeheaderComponent } from './component/homeheader/homeheader.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ManufactureDetailsComponent } from './component/manufacture-details/manufacture-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataTableComponent,
    SeatselectionComponent,
    SeatLayoutComponent,
    SelectedseatComponent,
    AvailableseatsComponent,
    ChildComponent,
    ParentComponent,
    DialogboxComponent,
    MemberlistComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe,
    SingupComponent,
    LoadingSpinnerComponent,
    TravelDetailsComponent,
    LoginComponent,
    FormArrayComponent,
    ProductDetailsComponent,
    VariantDetailsComponent,
    AddproductComponent,
    HomeheaderComponent,
    NavigationComponent,
    ManufactureDetailsComponent,
  ],
  entryComponents:[DialogboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MaterialModule,
    

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
