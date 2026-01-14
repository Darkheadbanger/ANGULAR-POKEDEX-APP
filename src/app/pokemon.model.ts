export interface Pokemon {
  id: number;
  name: string;
  picture: string;
  life: number;
  dammage: number;
  types: [string] | [string, string] | [string, string, string];
  created: Date;
}

export type PokemonColor =
  | '#EF5350'
  | '#42A5F5'
  | '#66BB6A'
  | '#FDD835'
  | '#AB47BC'
  | '#90CAF9'
  | '#9CCC65'
  | '#BDBDBD'
  | '#FF7043'
  | '#000000';
