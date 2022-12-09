import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/billboars-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public movies: Movie[]=[];


  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const scroll = ( document.documentElement.scrollTop || document.body.scrollTop );
    const documentHeight = ( document.documentElement.clientHeight || document.body.clientHeight );
    const maxPosition = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    const positionInDocument = ( documentHeight + scroll );

    if ( positionInDocument === maxPosition ) {
      if ( this.moviesService.loading){return;}
      this.moviesService.getBillboard().subscribe( movies => {
          this.movies.push(...movies);
        });
    }
  }

  constructor( private moviesService: MoviesService ){
    this.moviesService.getBillboard()
    .subscribe( movies => {
      // console.log( resp )
      this.movies = movies
    })
  }

  ngOnInit(): void {
  }

}
