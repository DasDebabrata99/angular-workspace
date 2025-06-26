import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwd-gen';
  password = 'abcd';
  length :number = 0;
  useLetters = false;
  useNumbers = false;

  lengthChanged ( event: any){
    console.log(event.target.value);
    this.length = parseInt(event.target.value);
  }
  lettersClicked(){
    this.useLetters = !this.useLetters;
  }

  numberClicked(){
    this.useNumbers = !this.useNumbers;
  }
  generatePassword(): void{
    console.log("gen pass called!")
    this.password = '';
    let num = '0123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let validChars = '';
    
 
    if(this.useLetters){
      validChars +=letters;
    }
    if(this.useNumbers){
      validChars +=num;
    }
    console.log(validChars)
    console.log("length" + this.length);
    for(let i=0; i< this.length; i++){
      let index = Math.floor(Math.random()*this.length);
      this.password += validChars.charAt(index);
    }
    console.log("password" + this.password);

  }
}
