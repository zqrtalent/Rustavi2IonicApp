import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: './news/news.module#NewsPageModule'
          },
          {
            path: ':id',
            loadChildren: './newsdetail/newsdetail.module#NewsdetailPageModule'
          }
        ]
      },
      {
        path: 'shows',
        children: [
          {
            path: '',
            loadChildren: './shows/shows.module#ShowsPageModule'
          },
          {
            path: ':name',
            loadChildren: './showsdetail/showsdetail.module#ShowsdetailPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
