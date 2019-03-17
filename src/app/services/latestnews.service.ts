import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { NewsItem } from '../model/NewsItem';

@Injectable({
  providedIn: 'root'
})
export class LatestnewsService {

  constructor( private http: HttpClient ) { }

  private urlLatestNews: string = 'https://rustavi2webapi.herokuapp.com/api/v1/news/latest'
  private urlNewsDetail: string = 'https://rustavi2webapi.herokuapp.com/api/v1/news/'

  getLatestNews(): Observable<any> {
    return this.http.get(this.urlLatestNews)
      .pipe(
        map (
          results => results
        ));
  }

  getNewsDetail(id: string): Observable<any>{
    return this.http.get(this.urlNewsDetail + id)
      .pipe(
        map (
          results => results
        ));
  }
}
