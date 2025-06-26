import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'rsJs_example';

  constructor(){
    
  }
  ngAfterViewInit(): void {
    const ip = document.querySelector('input');
    ip?.addEventListener('input', (event) =>{
      let text:any = (event.target as HTMLInputElement).value;

      text = parseInt(text);
      if(isNaN(text)){
        throw new Error("Please enter a valid namuber!")
      }
      this.logValue(text);
      
    })
  }
  logValue = function(value: any){
    console.log(value);
  }
}
