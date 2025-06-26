import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpaceBarComponent } from './space-bar/space-bar.component';
import { WikipediaService } from './wikipedia.service';
import { PageListComponent } from './page-list/page-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpaceBarComponent, PageListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  html = '<h1>Hi There </h1>'
  
  pages: { title: string; wordcount: number; snippet: string, pageid: string }[] = [];
  constructor(private wiki: WikipediaService){}
  
  title = 'wsearch';
  OnTermSubmit(term: string){
    if (term.length > 0){
        
        this.wiki.search(term).subscribe( (response: any)=>{
        this.pages = response.query.search;
        console.log(this.pages.length)
      });
    }
  }
  
}
