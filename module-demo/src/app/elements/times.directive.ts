import { Directive, Input } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appTimes]',
  standalone: true
})
export class TimesDirective {

  constructor( private viewContainerRef: ViewContainerRef, 
              private templateRef: TemplateRef<any>) { }

  @Input('appTimes') set render(times: number){
    console.log('directive getting called')
    this.viewContainerRef.clear();
    for(let i = 0; i < times; i++){
        this.viewContainerRef.createEmbeddedView(this.templateRef,{})
    }
  }

}
