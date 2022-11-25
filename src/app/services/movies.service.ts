import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillboardResponse } from '../interfaces/billboars-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ){ }

    getBillboard():Observable<BillboardResponse>{
      return this.http.get<BillboardResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=d4f79424be15f01bff43a1a62ab4ad83&language=en-US&page=1')
    }
}
