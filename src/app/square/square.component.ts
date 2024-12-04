import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  imports: [CommonModule],
  template: `
    <button>{{ value }}</button>
  `,
  styleUrl: './square.component.scss'
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | " ";

  constructor() {
    this.value = " ";
  }

}
