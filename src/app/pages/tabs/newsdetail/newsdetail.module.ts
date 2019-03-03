import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsdetailPage } from './newsdetail.page';
import { NewsDetailResolverService } from '../../../resolvers/news-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: NewsdetailPage,
    resolve: { detailData: NewsDetailResolverService }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsdetailPage]
})
export class NewsdetailPageModule {}
