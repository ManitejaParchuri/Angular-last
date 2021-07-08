import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyupperPipe } from './myupper.pipe';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { PsortPipe } from './psort.pipe';
import { PsearchPipe } from './psearch.pipe';
import { MycolorDirective } from './directives/mycolor.directive';



@NgModule({
  declarations: [
    MyupperPipe,
    SortPipe,
    SearchPipe,
    PsortPipe,
    PsearchPipe,
    MycolorDirective

  ],
  imports: [
    CommonModule
  ],
  exports:[MyupperPipe, SortPipe,SearchPipe,PsearchPipe,PsortPipe,MycolorDirective]
})
export class SharedModule { }

