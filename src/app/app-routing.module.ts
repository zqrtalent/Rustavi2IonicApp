import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
  { path: '**', redirectTo: '' },
  // { path: 'latestnews', loadChildren: './pages/latestnews/latestnews.module#LatestnewsPageModule' },
  // { path: 'news/:id', loadChildren: './pages/news-detail/news-detail.module#NewsDetailPageModule' },
  // { path: 'shows', loadChildren: './pages/shows/shows.module#ShowsPageModule' },
  // { path: 'show/:name', loadChildren: './pages/show-detail/show-detail.module#ShowDetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
