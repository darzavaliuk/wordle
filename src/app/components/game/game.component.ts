import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent implements OnInit {
  words = ["binder", "binder", "abbots", "addend", "nature", "native"]

  ngOnInit() {
    this.attempt = 0;
    this.isWinner = false;
    this.stopGame = false
    this.word = this.words[Math.floor(Math.random() * this.words.length) + 1]
    this.colorsArr.fill(-1)
    this.visitArr.fill(false)
  }

  colorsArr: number[] = new Array(6).fill(-1);
  visitArr: boolean[] = new Array(6).fill(false);
  word: string = "colors"
  attempt: number = 0;
  inputColor: string[] = new Array(36).fill('white');
  stopGame: boolean = false
  isWinner: boolean = false;

  colorInput() {
    for (let i = 0; i < this.colorsArr.length; i++) {
      if (this.colorsArr[i] == 0) {
        this.inputColor[this.attempt * 6 + i] = "green"
      } else if ((this.colorsArr[i] == 2)) {
        this.inputColor[this.attempt * 6 + i] = "red"
      } else {
        this.inputColor[this.attempt * 6 + i] = "yellow"
      }
    }
    if (!this.colorsArr.includes(1) && !this.colorsArr.includes(2)) {
      this.stopGame = true;
    }
    this.colorsArr.fill(-1)
    this.visitArr.fill(false)
    this.attempt++
    if (this.attempt === 6) {
      this.stopGame = true
    }
  }

  checkInput(e: Event) {
    let id: number = Number((e.target as Element).id);
    let letter: string = (e.target as HTMLInputElement).value;
    id = id % 6;
    this.colorsArr[id] = (this.word)[id] == letter ? 0 : ((this.word).includes(letter) ? 1 : 2);
    this.visitArr[id] = true
    if (!this.visitArr.includes(false)) {
      this.colorInput()
    }
  }


}
