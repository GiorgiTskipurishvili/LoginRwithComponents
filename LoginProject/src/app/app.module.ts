import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductService } from './product.service';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    HeaderComponent,
    LoginComponent,
    SaveEmployeeComponent,
    GetEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
