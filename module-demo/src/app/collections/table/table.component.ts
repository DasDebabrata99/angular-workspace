import { Component, Input } from '@angular/core';

interface Header {
  key: keyof DataItem;
  label: string;
}

interface DataItem {
  name: string;
  job: string;
  age: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input("class") classNames=""
  @Input() data: DataItem[]=[];
  @Input() headers: Header[] =[];
  
  constructor(){}
}
