export type PokemonSex = 'male' | 'female';

export interface Pokemon {
  id: number;
  name: string;
  sex: PokemonSex;
}
