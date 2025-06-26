import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {   }

  getRandomPhoto(){

    return this.http.get('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization: 'Client-ID RhDGE7OKnF9xkTvhmtG62zvWy8y6P8e0zgt_Uq6OJD4'
      }
    })
  }
}
