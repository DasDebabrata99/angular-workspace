import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-space-bar',
  standalone: true,
  imports: [],
  templateUrl: './space-bar.component.html',
  styleUrl: './space-bar.component.css'
})
export class SpaceBarComponent {
  @Output() submitted = new EventEmitter<string>(); 

  term = '';
  onSubmit(event:any){
    event.preventDefault();
    console.log(this.term);
    this.submitted.emit(this.term);
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.term = inputElement.value;
      
    }
  }
}
