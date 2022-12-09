import { Component, OnInit } from '@angular/core';
import { Generations, getGeneration } from 'src/types/Generations';
import { PokemonListItem } from 'src/types/PokemonListItem';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pokemonList: Array<PokemonListItem> = [];
  pokemonSearch: string = '';
  generations = Object.keys(Generations);

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.getAllPokemons(Generations.GENERATION_ONE).subscribe(
      (dto) =>
        (this.pokemonList = dto.results.map((item) => {
          return {
            id: item.url.split('/')[6],
            name: item.name,
            isFound: false,
          };
        }))
    );
  }

  onEnterKeyUp(search: string): void {
    const isIndexFound = this.pokemonList.findIndex(
      (pokemon) => pokemon.name === search && !pokemon.isFound
    );

    if (isIndexFound === -1) return;

    const pokemonFound = this.pokemonList[isIndexFound];

    this.pokemonSearch = '';
    pokemonFound.isFound = true;
    const observablePokemon = this.service.getPokemon(pokemonFound.id);

    if (!observablePokemon) return;

    observablePokemon.subscribe(
      (pokemon) => (pokemonFound.sprite = pokemon.sprites.front_default)
    );
  }

  onSelectChange(event: Event) {
    const generationSelected = (event.target as HTMLInputElement).value;

    const endpoint = getGeneration(generationSelected);

    if (endpoint === '') return;

    this.service.getAllPokemons(endpoint).subscribe(
      (dto) =>
        (this.pokemonList = dto.results.map((item) => {
          return {
            id: item.url.split('/')[6],
            name: item.name,
            isFound: false,
          };
        }))
    );
  }
}
