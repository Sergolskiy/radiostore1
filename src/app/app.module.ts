import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";

import { AmChartsModule } from "@amcharts/amcharts3-angular";
//import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule} from './demo-material-module';

import { HttpClient } from './shared/http-client'

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import {AppGuard} from "./app.guard";
//import { StatisticsComponent } from './statistics/statistics.component';
// import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';

// import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
//    StatisticsComponent,
//    GoogleAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    // MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpModule,
    AmChartsModule,
//    ChartsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
      AppGuard,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
