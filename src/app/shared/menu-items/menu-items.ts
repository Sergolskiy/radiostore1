import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
    {state: 'users', name: 'Пользователи', type: 'link', icon: 'av_timer' },
    {state: 'products', name: 'Товары', type: 'link', icon: 'av_timer' },
    {state: 'orders', name: 'Заказы', type: 'link', icon: 'all_inclusive' },
    {state: 'popular-products', name: 'Популяные товары', type: 'link', icon: 'av_timer' },
    {state: 'recommend-products', name: 'Рекомендованные товары', type: 'link', icon: 'av_timer' },
    {state: 'categories', name: 'Категории', type: 'link', icon: 'av_timer' },
    {state: 'news', name: 'Новости', type: 'link', icon: 'av_timer' },
    {state: 'articles', name: 'Видеообзоры', type: 'link', icon: 'av_timer' },
    {state: 'comments', name: 'Комментарии', type: 'link', icon: 'av_timer' },
    {state: 'attributes', name: 'Атрибуты и характеристики', type: 'link', icon: 'av_timer' },
    {state: 'banners', name: 'Баннеры', type: 'link', icon: 'av_timer' },
    {state: 'pages', name: 'Статические страницы', type: 'link', icon: 'av_timer' },
    {state: 'settings', name: 'Настройки', type: 'link', icon: 'av_timer' },
    {state: 'statistics', name: 'Статистика', type: 'link', icon: 'show_chart' },
    {state: 'google-analytics', name: 'Google Analytics', type: 'link', icon: 'equalizer' },
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
