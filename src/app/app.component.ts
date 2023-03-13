import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TvmazeService } from 'tvmaze';

@Component({
  selector: 'dom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lib-comp';
  show$:Observable<any>;
  constructor(private tvmaze: TvmazeService){
    this.show$= this.tvmaze.getShow(336)

  }
}
