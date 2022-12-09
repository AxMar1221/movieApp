import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { BillboardResponse } from '../interfaces/billboars-response';
import { Movie } from 'src/app/interfaces/billboars-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3'
  private billboardPage = 1;
  public loading: boolean = false;

  constructor( private http: HttpClient ){ }

  get params(){
    return {
      api_key: 'd4f79424be15f01bff43a1a62ab4ad83',
      language: 'es-Es',
      page: this.billboardPage
    }
  }
    getBillboard():Observable<Movie[]>{
      if ( this.loading ){
        return of([]);
      }
      this.loading = true;
      return this.http.get<BillboardResponse>(`${ this.baseUrl }/movie/now_playing`,{
        params: this.params
      }).pipe(
        map( (resp) => resp.results ),
        tap( () => {
          this.billboardPage += 1;
          this.loading = false;
        })
      )
    }
}
