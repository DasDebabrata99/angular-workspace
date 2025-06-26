import { Component, Input } from '@angular/core';
import { TimesDirective } from '../times.directive';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent {
  @Input() header = true;
  @Input() lines = 20;
}