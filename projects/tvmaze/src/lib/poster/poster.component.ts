import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  src='https://miro.medium.com/v2/resize:fill:176:176/1*FWYiVGkpfF_Un016GX3tHw.png';
  @Input('showId') showId: number;

posterUrl$: Observable<string>;

  constructor(public tvmaze: TvmazeService) {

   }

  ngOnInit(): void {
    this.posterUrl$ = this.tvmaze.getShow(this.showId).pipe(map(show=> show))

  }

}
