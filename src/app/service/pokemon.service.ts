import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DtoPokemonGet } from 'src/types/PokemonApi';

const BASE_URL =
  'https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=151"';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAllPokemons() {
    return this.httpClient.get<DtoPokemonGet>(BASE_URL);
  }
}
