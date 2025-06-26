import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  standalone: true,
  imports:[HttpClientModule],
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.css'
})
export class PhotoShowComponent {
  photoUrl=''
  constructor(private photoservice: PhotosService){
    this.getPhoto();
  }

  getPhoto(){
    this.photoservice.getRandomPhoto().subscribe((response: any)=>{
      this.photoUrl = response.urls.full;
      console.log('photourl: ' + this.photoUrl);
    });
  }

  updatePhoto(){
    this.getPhoto();

  }

}
