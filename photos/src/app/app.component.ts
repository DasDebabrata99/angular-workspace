import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoShowComponent } from './photo-show/photo-show.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoShowComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photos';
}
