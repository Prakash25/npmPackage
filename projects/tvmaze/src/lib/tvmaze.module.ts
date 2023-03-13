import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { PosterComponent } from './poster/poster.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TvmazeService } from './tvmaze.service';
//import { TvmazeService } from 'tvmaze';


@NgModule({
  declarations: [
    TvmazeComponent,
    PosterComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    TvmazeComponent,
    //PosterComponent
  ],
  providers:[TvmazeService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TvmazeModule { }
