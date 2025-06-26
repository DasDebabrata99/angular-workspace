import { Component } from '@angular/core';

interface DataItem {
  name: string;
  job: string;
  age: string;
}

interface Header {
  key: keyof DataItem;  // Ensure key is a keyof DataItem
  label: string;
}

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {

  data: DataItem[] =[
     {name: "Austin", job: "Engineer", age: "40"},
     {name: "Gary", job: "Scientist", age: "55"},
     {name: "Susan", job: "Surgeon", age: "46"}
  ];

  headers: Header[] = [
    {key: "name", label: "Name"},
    {key: "job", label: "Job"},
    {key: "age", label: "Age"}
  ];
}
