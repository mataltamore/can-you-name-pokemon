import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonSpeciesDTO } from 'src/types/PokemonSpeciesDTO';
import { PokemonDTO } from 'src/types/PokemonDTO';

const SPECIES_BASE_URL = 'https://pokeapi.co/api/v2/pokemon-species';

const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAllPokemons(endpoint: string) {
    return this.httpClient.get<PokemonSpeciesDTO>(
      `${SPECIES_BASE_URL}/${endpoint}`
    );
  }

  getPokemon(id: string) {
    if (id.length === 0 || isNaN(Number(id))) return;

    return this.httpClient.get<PokemonDTO>(`${POKEMON_BASE_URL}/${id}`);
  }
}
