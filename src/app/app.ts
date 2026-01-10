import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name: string = 'Pikachu';
  life: WritableSignal<number> = signal(2);

  incrementLife(): void {
    this.life.update((value) => value + 1);
  }

  decrementLife(): void {
    this.life.update((value: number) => {
      return value === 0 ? 0 : value - 1}
    );
  }
}
