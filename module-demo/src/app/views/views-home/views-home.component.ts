import { Component } from '@angular/core';

interface stat {
  value: number;
  label:string;
}
interface item {
  image: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {

  stats: stat[] = [{value : 50, label: "# users"},
    {value : 200, label: "Revenue"},
    {value : 4, label: "Ratings"}
  ]

  items: item[] = [{ image: "/assets/images/couch.jpeg", title: "Couch", description: "a good couch to sit in" },
    { image: "/assets/images/dresser.jpeg", title: "Dresser", description: "A good dresser to dress" }
  ]
}
