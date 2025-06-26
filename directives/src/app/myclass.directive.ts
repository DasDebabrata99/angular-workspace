import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyclass]'
})
export class MyclassDirective {

  constructor(private element: ElementRef) { 
    console.log("My directive called!")
    
  }

  @Input('appMyclass') set className(obj: any){

    for(let key in obj){
        if(obj[key]){
          this.element.nativeElement.classList.add(key);
        }else{
          this.element.nativeElement.classList.remove(key);
        }
    }
  }
}
