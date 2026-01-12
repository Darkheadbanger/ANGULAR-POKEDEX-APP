import { Pokemon } from './pokemon.model';

export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: 'Pikachu',
    picture: '/pikachu.png',
    life: 25,
    dammage: 55,
    types: ['Electrik'],
    created: new Date('2025-01-01'),
  },
  {
    id: 2,
    name: 'Dracaufeu',
    picture: '/dracaufeu.png',
    life: 78,
    dammage: 84,
    types: ['Feu', 'Vol'],
    created: new Date('2025-01-02'),
  },
  {
    id: 3,
    name: 'Bulbizarre',
    picture: '/bulbizarre.png',
    life: 45,
    dammage: 49,
    types: ['Plante', 'Poison'],
    created: new Date('2025-01-03'),
  },
];
