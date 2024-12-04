import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-square',
  imports: [CommonModule, MatButton],
  template: `
    <button mat-raised-button>{{ value }}</button>
  `,
  styleUrl: './square.component.scss'
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | " ";

  constructor() {
    this.value = " ";
  }

}
