import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() close = new EventEmitter();

  constructor(private element: ElementRef){}
  ngOnInit(){
    document.body.appendChild(this.element.nativeElement);
  }
  ngOnDestroy(){
    this.element.nativeElement.remove();
  }
  OnCloseClick(){
    this.close.emit();
  }
}