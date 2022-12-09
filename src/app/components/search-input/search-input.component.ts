import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/service/pokemon.service';
import { PokemonListItem } from 'src/types/PokemonListItem';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  pokemonSearch: string = '';
  @Input() pokemonList: Array<PokemonListItem> = [];
  @Output() pokemonListChange = new EventEmitter<Array<PokemonListItem>>();

  constructor(private service: PokemonService) {}

  ngOnInit(): void {}

  private findPokemonBySearch(search: string) {
    const isIndexFound = this.pokemonList.findIndex(
      (pokemon) => pokemon.name === search.toLowerCase() && !pokemon.isFound
    );

    if (isIndexFound === -1) return;

    return this.pokemonList[isIndexFound];
  }

  private areAllPokemonFound() {
    const allPokemonsFound = this.pokemonList.every(
      (pokemon) => pokemon.isFound
    );

    if (allPokemonsFound) alert('You did it!!!');
  }

  private setPokemonSprite(pokemonFound: PokemonListItem) {
    const observablePokemon = this.service.getPokemon(pokemonFound.id);

    if (!observablePokemon) return;

    observablePokemon.subscribe(
      (pokemon) => (pokemonFound.sprite = pokemon.sprites.front_default)
    );
  }

  onEnterKeyUp(search: string): void {
    const pokemonFound = this.findPokemonBySearch(search);
    if (!pokemonFound) return;

    pokemonFound.isFound = true;
    this.pokemonListChange.emit(this.pokemonList);
    this.pokemonSearch = '';

    this.areAllPokemonFound();

    this.setPokemonSprite(pokemonFound);
  }
}
