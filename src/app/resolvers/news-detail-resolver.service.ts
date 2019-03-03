import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs"
import { LatestnewsService } from '../services/latestnews.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsDetailResolverService implements Resolve<INewsDetailData> {

  constructor( private newsService: LatestnewsService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): INewsDetailData | Observable<INewsDetailData> | Promise<INewsDetailData> {
    let newsId = route.paramMap.get("id");
    return this.newsService.getNewsDetail(newsId)
      .pipe(map( results => ({
        id: results.id,
        title: results.title,
        time: results.time,
        storyDetailHtml: results.storyDetail,
        coverImageUrl: results.coverImageUrl,
        videoUrl: results.videoUrl,
      })));
  }
}
