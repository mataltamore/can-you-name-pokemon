import { PokemonSpeciesItemDTO } from './PokemonSpeciesItemDTO';

export type PokemonSpeciesDTO = {
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonSpeciesItemDTO>;
};
