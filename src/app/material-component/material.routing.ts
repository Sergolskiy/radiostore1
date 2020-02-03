import { Routes } from '@angular/router';

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
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component'; 
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

import {UsersComponent} from "./users/users.component";
import {UsersCreateComponent} from "./users/create/users-create.component";
import {UsersUpdateComponent} from "./users/update/users-update.component";
import {ProductsComponent} from "./products/products.component";
import {ProductsCreateComponent} from "./products/create/products-create.component";
import {ProductsUpdateComponent} from "./products/update/products-update.component";
import {OrdersComponent} from './orders/orders.component';
import {OrdersUpdateComponent} from './orders/update/orders-update.component';
import {PopularProductsComponent} from "./popular-products/popular-products.component";
import {RecommendProductsComponent} from "./recommend-products/recommend-products.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CategoriesCreateComponent} from "./categories/create/categories-create.component";
import {CategoriesUpdateComponent} from "./categories/update/categories-update.component";
import {NewsComponent} from "./news/news.component";
import {NewsCreateComponent} from "./news/create/news-create.component";
import {NewsUpdateComponent} from "./news/update/news-update.component";
import {ArticlesComponent} from "./articles/articles.component";
import {ArticlesCreateComponent} from "./articles/create/articles-create.component";
import {ArticlesUpdateComponent} from "./articles/update/articles-update.component";
import {CommentsComponent} from "./comments/comments.component";
import {AttributesComponent} from "./attributes/attributes.component";
import {AttributesCreateComponent} from "./attributes/create/attributes-create.component";
import {AttributesUpdateComponent} from "./attributes/update/attributes-update.component";
import {BannersComponent} from "./banners/banners.component";
import {BannersCreateComponent} from "./banners/create/banners-create.component";
import {BannersUpdateComponent} from "./banners/update/banners-update.component";
import {SettingsComponent} from "./settings/settings.component";
import {PagesComponent} from "./Pages/pages.component";
import {PagesUpdateComponent} from "./Pages/update/pages-update.component";
import {GoogleAnalyticsComponent} from "./google-analytics/google-analytics.component";
import {StatisticsComponent} from "./statistics/statistics.component";


export const MaterialRoutes: Routes = [
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'orders/update/:id',
        component: OrdersUpdateComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    }, {
        path: 'users/create',
        component: UsersCreateComponent
    }, {
        path: 'users/update/:id',
        component: UsersUpdateComponent
    }, {
        path: 'users/delete/:id',
        component: UsersUpdateComponent
    }, {
        path: 'products',
        component: ProductsComponent,
    }, {
        path: 'products/create',
        component: ProductsCreateComponent
    }, {
        path: 'products/update/:slug',
        component: ProductsUpdateComponent
    }, {
        path: 'popular-products',
        component: PopularProductsComponent
    }, {
        path: 'recommend-products',
        component: RecommendProductsComponent
    }, {
        path: 'categories',
        component: CategoriesComponent
    }, {
        path: 'categories/create',
        component: CategoriesCreateComponent
    }, {
        path: 'categories/update/:slug',
        component: CategoriesUpdateComponent
    }, {
        path: 'news',
        component: NewsComponent
    }, {
        path: 'news/create',
        component: NewsCreateComponent
    }, {
        path: 'news/update/:slug',
        component: NewsUpdateComponent
    }, {
        path: 'articles',
        component: ArticlesComponent
    }, {
        path: 'articles/create',
        component: ArticlesCreateComponent
    }, {
        path: 'articles/update/:slug',
        component: ArticlesUpdateComponent
    }, {
        path: 'attributes',
        component: AttributesComponent
    }, {
        path: 'attributes/create',
        component: AttributesCreateComponent
    }, {
        path: 'attributes/update/:id',
        component: AttributesUpdateComponent
    }, {
        path: 'comments',
        component: CommentsComponent
    }, {
        path: 'banners',
        component: BannersComponent
    }, {
        path: 'banners/create',
        component: BannersCreateComponent
    }, {
        path: 'banners/update/:id',
        component: BannersUpdateComponent
    }, {
        path: 'pages',
        component: PagesComponent
    }, {
        path: 'pages/update/:id',
        component: PagesUpdateComponent
    }, {
        path: 'settings',
        component: SettingsComponent
    }, {
      path: 'button',
      component: ButtonsComponent
    }, {
      path: 'grid',
      component: GridComponent
    }, {
      path: 'lists',
      component: ListsComponent
    }, {
      path: 'menu',
      component: MenuComponent
    }, {
      path: 'tabs',
      component: TabsComponent
    }, {
      path: 'stepper',
      component: StepperComponent
    }, {
      path: 'expansion',
      component: ExpansionComponent
    }, {
      path: 'chips',
      component: ChipsComponent
    }, {
      path: 'toolbar',
      component: ToolbarComponent
    }, {
      path: 'progress-snipper',
      component: ProgressSnipperComponent
    }, {
      path: 'progress',
      component: ProgressComponent
    }, {
      path: 'dialog',
      component: DialogComponent
    }, {
      path: 'tooltip',
      component: TooltipComponent
    }, {
      path: 'snackbar',
      component: SnackbarComponent
    }, {
      path: 'slider',
      component: SliderComponent
    }, {
      path: 'slide-toggle',
      component: SlideToggleComponent
    }, {
        path: 'google-analytics',
        component: GoogleAnalyticsComponent
    }, {
        path: 'statistics',
        component: StatisticsComponent
    }
];
