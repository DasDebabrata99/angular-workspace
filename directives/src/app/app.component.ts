import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyclassModule } from './app.module'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MyclassModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
  currentPage=0;

  images= [
    {
      title: 'gallaxy',
      url: 'https://images.unsplash.com/photo-1735580825884-5b7ad8b5e551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'snowboarding',
      url: 'https://images.unsplash.com/photo-1735657090759-883e95a7f392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'train station',
      url: 'https://images.unsplash.com/photo-1737069220405-6ddcbd8c70c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'home',
      url: 'https://images.unsplash.com/photo-1732134066696-37958947b7ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'gallaxy',
      url: 'https://images.unsplash.com/photo-1735580825884-5b7ad8b5e551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'snowboarding',
      url: 'https://images.unsplash.com/photo-1735657090759-883e95a7f392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'train station',
      url: 'https://images.unsplash.com/photo-1737069220405-6ddcbd8c70c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'home',
      url: 'https://images.unsplash.com/photo-1732134066696-37958947b7ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'gallaxy',
      url: 'https://images.unsplash.com/photo-1735580825884-5b7ad8b5e551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'snowboarding',
      url: 'https://images.unsplash.com/photo-1735657090759-883e95a7f392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'train station',
      url: 'https://images.unsplash.com/photo-1737069220405-6ddcbd8c70c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'home',
      url: 'https://images.unsplash.com/photo-1732134066696-37958947b7ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'gallaxy',
      url: 'https://images.unsplash.com/photo-1735580825884-5b7ad8b5e551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'snowboarding',
      url: 'https://images.unsplash.com/photo-1735657090759-883e95a7f392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'train station',
      url: 'https://images.unsplash.com/photo-1737069220405-6ddcbd8c70c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'home',
      url: 'https://images.unsplash.com/photo-1732134066696-37958947b7ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  checkWindow(i: number){
    return Math.abs(this.currentPage - i) < 5;
  }
}
