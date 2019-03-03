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

  private urlLatestNews: string = 'http://localhost:5000/api/news/latest'
  private urlNewsDetail: string = 'http://localhost:5000/api/news/'

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
