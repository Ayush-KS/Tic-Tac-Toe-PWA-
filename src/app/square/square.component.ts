import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  
      <button nbButton fullwidth *ngIf="!value">
        {{value}}
      </button>

      <button nbButton hero status="success" *ngIf="value=='X'">
        {{value}}
      </button>
      
      <button nbButton hero status="info" *ngIf="value=='O'">
        {{value}}
      </button>

  `,
  styles: ["button { height: 100px; width: 100px; font-size: 5em !important;}"]
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
