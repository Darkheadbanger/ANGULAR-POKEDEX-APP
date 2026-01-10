import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Angular 21';
  name = 'Pikachu';
  life = 2;

  incrementLife() {
    this.life = this.life + 1;
  }

  decrementLife() {
    if (this.life === 0) {
      return;
    }
    this.life = this.life - 1;
  }
}
