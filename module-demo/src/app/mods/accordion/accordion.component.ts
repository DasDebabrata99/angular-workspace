import { Component, Input } from '@angular/core';

interface item{
  title: string,
  content: string,
}
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() itemlist: item[] = [];
  openIndex=0;

  setActive(i: number){
    if (i === this.openIndex){
      this.openIndex = -1;
    }else{
      this.openIndex = i;
    }
  }

}
