import { effect, computed, Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name: string = 'Pikachu';
  life: WritableSignal<number> = signal(0);
  doubleLife = computed(() => this.life() + 2);
  size = computed(() => {
    if (this.life() >= 0 && this.life() <= 15) {
      return 'Petit';
    } else if (this.life() >= 16 && this.life() <= 25) {
      return 'Moyen';
    } else {
      return 'Grand';
    }
  });

  imageSrc = signal('/pokemon_flying_arceus.jpg');

  constructor() {
    effect(() => {
      console.log('La vie a été mis a jour :', this.life());
    });
  }

  incrementLife(): void {
    this.life.update((value) => value + 1);
  }

  decrementLife(): void {
    this.life.update((value: number) => {
      return value === 0 ? 0 : value - 1;
    });
  }

  reset() {
    this.life.set(0);
  }
}
