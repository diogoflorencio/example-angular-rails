import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { toast } from 'angular2-materialize';

import { Comic } from './comic';

@Injectable()
export class ComicService {

  private comicsUrl:string = "http://localhost:4200/api/comics";
  // private comicsUrl:string = "http://localhost:3000/comics";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(this.comicsUrl)
      .pipe(catchError(this.handleError('getComics', [])));
  }

  getComic(id: number): Observable<Comic> {
    const url = `${this.comicsUrl}/${id}`;
    return this.http.get<Comic>(`${this.comicsUrl}/${id}`)
      .pipe(catchError(this.handleError<Comic>(`getHero id=${id}`)));
  }

  post(comic: Comic): Observable<Comic> {
  return this.http.post<Comic>(this.comicsUrl, comic, this.httpOptions)
    .pipe(catchError(this.handleError<Comic>('addComic')));
}

  update(comic: Comic): Observable<any> {
    const url = `${this.comicsUrl}/${comic.id}`;
    return this.http.put(url, comic, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateComic')));
  }

  delete(comic: Comic) : Observable<Comic> {
    const url = `${this.comicsUrl}/${comic.id}`;
    return this.http.delete<Comic>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Comic>('deleteComic')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // better job of transforming error for user consumption
      toast(`${operation} failed: ${error.message}`, 4000);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
