import { effect, computed, Component, signal, WritableSignal } from '@angular/core';
import { POKEMONS } from './pokemon-fake-list';
import { Pokemon } from './pokemon.model';
import { PokemonBorder } from './pokemon-border';

@Component({
  selector: 'app-root',
  imports: [PokemonBorder],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  pokemons = signal(POKEMONS);

  name: string = 'Pikachu';
  // life: WritableSignal<number> = signal(0);
  // doubleLife = computed(() => this.life() + 2);
  size(pokemon: Pokemon) {
    if (pokemon.life >= 0 && pokemon.life <= 15) {
      return 'Petit';
    } else if (pokemon.life >= 16 && pokemon.life <= 25) {
      return 'Moyen';
    } else {
      return 'Grand';
    }
  }

  // imageSrc = signal('/pokemon_flying_arceus.jpg');

  constructor() {
    effect(() => {
      console.log('La vie a été mis a jour :', this.pokemons);
    });
  }

  incrementLife(pokemon: Pokemon): void {
    pokemon.life += 1;
  }

  decrementLife(pokemon: Pokemon): void {
    pokemon.life -= 1;
  }

  reset(pokemon: Pokemon) {
    pokemon.life = 0;
  }
}
