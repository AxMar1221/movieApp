import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/billboars-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public movies: Movie[]=[];

  constructor( private moviesService: MoviesService ){
    this.moviesService.getBillboard()
    .subscribe( resp => {
      // console.log( resp )
      this.movies = resp.results
    })
  }

  ngOnInit(): void {
  }

}
