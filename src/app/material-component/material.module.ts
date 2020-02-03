import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';

import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { DialogComponentConfirm, DialogOverviewExampleConfirmDialog } from './dialog/dialogConfirm.component';
import { DialogComponentMultiple, DialogOverviewExampleMultipleDialog } from './dialog/dialogMultiple.component';
import { DialogComponentDiscount, DialogOverviewExampleDiscountDialog } from './dialog/dialogDiscount.component';
import { DialogComponentAttribute, DialogOverviewExampleAttributeDialog } from './dialog/dialogAttribute.component';
import { DialogComponentCharacterisctic, DialogOverviewExampleCharacteriscticDialog } from './dialog/dialogCharacteristic.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from "./users/create/users-create.component";
import {UsersUpdateComponent} from "./users/update/users-update.component";
import {TextMaskModule} from "angular2-text-mask";
import {ProductsComponent} from "./products/products.component";
import {ProductsCreateComponent} from "./products/create/products-create.component";
import {ProductsUpdateComponent} from "./products/update/products-update.component";
import {OrdersComponent} from './orders/orders.component';
import {OrdersUpdateComponent} from './orders/update/orders-update.component';

import { CKEditorModule } from 'ngx-ckeditor';
import {PopularProductsComponent} from "./popular-products/popular-products.component";
import {RecommendProductsComponent} from "./recommend-products/recommend-products.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CategoriesCreateComponent} from "./categories/create/categories-create.component";
import {CategoriesUpdateComponent} from "./categories/update/categories-update.component";
import {NewsComponent} from "./news/news.component";
import {NewsCreateComponent} from "./news/create/news-create.component";
import {NewsUpdateComponent} from "./news/update/news-update.component";
import {ArticlesComponent} from "./articles/articles.component";
import {ArticlesUpdateComponent} from "./articles/update/articles-update.component";
import {ArticlesCreateComponent} from "./articles/create/articles-create.component";
import {CommentsComponent} from "./comments/comments.component";
import {AttributesComponent} from "./attributes/attributes.component";
import {AttributesCreateComponent} from "./attributes/create/attributes-create.component";
import {AttributesUpdateComponent} from "./attributes/update/attributes-update.component";
import {BannersComponent} from "./banners/banners.component";
import {BannersCreateComponent} from "./banners/create/banners-create.component";
import {BannersUpdateComponent} from "./banners/update/banners-update.component";
import {SettingsComponent} from "./settings/settings.component";
import {DialogDeleteComponent, DialogOverviewDeExampleDialog} from "./dialog/dialog-delete.component";
import {PagesUpdateComponent} from "./Pages/update/pages-update.component";
import {PagesComponent} from "./Pages/pages.component";
import {GoogleAnalyticsComponent} from "./google-analytics/google-analytics.component";
import {StatisticsComponent} from "./statistics/statistics.component";

import { AmChartsModule } from "@amcharts/amcharts3-angular";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    TextMaskModule,
      CKEditorModule,
    AmChartsModule
  ],
  providers: [

  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    DialogOverviewExampleConfirmDialog,
    DialogOverviewExampleDiscountDialog,
    DialogOverviewExampleMultipleDialog,
    DialogOverviewExampleAttributeDialog,
    DialogOverviewExampleCharacteriscticDialog,
      // DialogDeleteComponent,
      DialogOverviewDeExampleDialog
  ],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogComponentConfirm,
    DialogComponentAttribute,
    DialogComponentCharacterisctic,
    DialogComponentDiscount,
    DialogComponentMultiple,
    DialogOverviewExampleDialog,
    DialogOverviewExampleConfirmDialog,
    DialogOverviewExampleDiscountDialog,
    DialogOverviewExampleMultipleDialog,
    DialogOverviewExampleAttributeDialog,
    DialogOverviewExampleCharacteriscticDialog,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
      UsersComponent,
      UsersCreateComponent,
      UsersUpdateComponent,
      ProductsComponent,
      ProductsCreateComponent,
      ProductsUpdateComponent,
    OrdersComponent,
    OrdersUpdateComponent,
      PopularProductsComponent,
      RecommendProductsComponent,
      CategoriesComponent,
      CategoriesCreateComponent,
      CategoriesUpdateComponent,
      NewsComponent,
      NewsCreateComponent,
      NewsUpdateComponent,
      ArticlesComponent,
      ArticlesUpdateComponent,
      ArticlesCreateComponent,
      CommentsComponent,
      AttributesComponent,
      AttributesCreateComponent,
      AttributesUpdateComponent,
      BannersComponent,
      BannersCreateComponent,
      BannersUpdateComponent,
      SettingsComponent,
      DialogDeleteComponent,
      DialogOverviewDeExampleDialog,
      PagesUpdateComponent,
      PagesComponent,
      GoogleAnalyticsComponent,
    StatisticsComponent
  ]
})

export class MaterialComponentsModule {}
