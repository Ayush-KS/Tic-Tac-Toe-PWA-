import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    let main = document.getElementsByTagName('main') as HTMLCollectionOf<HTMLElement>;
      main[0].style.pointerEvents = 'auto';
      main[0].style.opacity = '1';
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number, event:any) {
    if(!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext; 
    }

    this.winner = this.calculateWinner();
    if(this.winner) {
      let main = document.getElementsByTagName('main') as HTMLCollectionOf<HTMLElement>;
      main[0].style.pointerEvents = 'none';
      main[0].style.opacity = '0.5';
      // let shand = document.getElementsByTagName("app-square") as HTMLCollectionOf<HTMLElement>;
      // for(let i = 0; i < shand.length; i++) {
      //   shand[i].style.pointerEvents = 'none';
      //   shand[i].style.opacity = '0.5';
      // }
    }
  }

  calculateWinner() {
    const rightLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i = 0; i < rightLines.length; i++) {
      const [a, b, c] = rightLines[i];

      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }

}
