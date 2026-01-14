import { Injectable } from '@angular/core';
import { POKEMONS as POKEMON_LIST } from './pokemon-fake-list';
import { Pokemon as PokemonList } from './pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  getPokemonList(): PokemonList[] {
    return POKEMON_LIST;
  }

  getPokemonById(id: number): PokemonList {
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id === id);

    if (!pokemon) {
      throw new Error(`No Poemon Found with Id ${id}`);
    }

    return pokemon;
  }
}
