import { PokemonSpeciesDTO } from 'src/types/PokemonSpeciesDTO';

export function populatePokemonList(dto: PokemonSpeciesDTO) {
  return dto.results.map((item) => {
    return {
      id: item.url.split('/')[6],
      name: item.name,
      isFound: false,
    };
  });
}
