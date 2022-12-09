import { Component, OnInit } from '@angular/core';
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

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.getAllPokemons().subscribe(
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

    this.pokemonSearch = '';
    this.pokemonList[isIndexFound].isFound = true;
  }
}
