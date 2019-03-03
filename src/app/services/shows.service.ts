import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  constructor( private http: HttpClient ) { }

  private urlShows: string = 'http://localhost:5000/api/shows/'

  getShows(): Observable<any> {
    return this.http.get(this.urlShows)
      .pipe(
        map (
          results => results
        ));
  }

  getShowDetail(name: string): Observable<any>{
    return this.http.get(this.urlShows + name)
      .pipe(
        map (
          results => results
        ));
  }
}
