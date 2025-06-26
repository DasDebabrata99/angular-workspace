import { Component } from '@angular/core';

interface item{
  title: string,
  content: string,
}
@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  showModal = false;
  OnClick(){
    this.showModal = !this.showModal
  }

  itemlist: item[] = [{ title:'why is sky blue?', content: 'wavelength of blue light'},
    { title:'what is color of orange?', content: 'color of orange is orange'},
    { title:'How to get a dog?', content: 'buy one or pet one'}
  ]
}
