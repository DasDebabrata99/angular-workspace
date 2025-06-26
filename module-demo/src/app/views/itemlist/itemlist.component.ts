import { Component, Input } from '@angular/core';

interface item {
  image: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrl: './itemlist.component.css'
})
export class ItemlistComponent {
  @Input() items: item[]=[];
}