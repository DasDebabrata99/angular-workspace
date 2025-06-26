import { NgModule } from '@angular/core';
import { MyclassDirective } from './myclass.directive';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [MyclassDirective, TimesDirective],
  exports: [MyclassDirective, TimesDirective]  // Export the directive to be used in other modules
})
export class MyclassModule { }
