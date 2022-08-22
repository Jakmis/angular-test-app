import { Injectable } from '@angular/core';
import { Champion } from './champion';
import { CHAMPIONS } from './mock-champions';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getChampions(): Observable<Champion[]> {
    this.messageService.add('ChampionService: fetched champions');
    return this.http.get<Champion[]>(this.championsUrl).pipe(
      tap(_ => this.log('fetched champions')),
      catchError(this.handleError<Champion[]>('getChampions', [])));
  }
  getChampion(id: number): Observable<Champion> {
    const url = `${this.championsUrl}/${id}`;
    return this.http.get<Champion>(url).pipe(
      tap(_ => this.log(`fetched champion id=${id}`)),
      catchError(this.handleError<Champion>(`getChampion id=${id}`))
    );

  }
  /* PUT: update champion to the server */
  updateChampion(champion: Champion): Observable<any> {
    return this.http.put(this.championsUrl, champion, this.httpOptions).pipe(
      tap(_ => this.log(`updated champion id=${champion.id}`)),
      catchError(this.handleError<any>('updateChampion'))
    );
  }

  /** POST: add a new champion to the server */
  addChampion(champion: Champion): Observable<Champion> {
    return this.http.post<Champion>(this.championsUrl, champion, this.httpOptions).pipe(
      tap((newChampion: Champion) => this.log(`added champion with id=${newChampion.id}`)),
      catchError(this.handleError<Champion>('addChampion'))
    );
  }

  deleteChampion(id: number): Observable<Champion> {
    const url = `${this.championsUrl}/${id}`;
    return this.http.delete<Champion>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted champion id=${id}`)),
      catchError(this.handleError<Champion>('deleteChampion'))
    );
  }

  /* GET heroes whose name contains search term */
  searchChampion(term: string): Observable<Champion[]> {
    if (!term.trim()) {
      // if not search term, return empty champion array.
      return of([]);
    }
    return this.http.get<Champion[]>(`${this.championsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found champions matching "${term}"`) :
        this.log(`no champions matching "${term}"`)),
      catchError(this.handleError<Champion[]>('searchChampions', []))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    this.messageService.add(`ChampionService: ${message}`);
  }
  private championsUrl = 'api/champions';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
