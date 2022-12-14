import { Component, Input, OnInit } from '@angular/core';

import { Movie } from '../../interfaces/billboars-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input()
  movies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {
  }

}
