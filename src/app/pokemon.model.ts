export interface Pokemon {
  id: number;
  name: string;
  picture: string;
  life: number;
  dammage: number;
  types: [string] | [string, string] | [string, string, string];
  created: Date;
}
