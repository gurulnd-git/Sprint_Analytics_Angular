import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './line-chart/line-chart.component';
import {ChartModule} from 'primeng/chart';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
     LineChartComponent,
     LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
