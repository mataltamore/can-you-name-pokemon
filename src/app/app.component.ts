import { Component, OnInit } from '@angular/core';
import { Generations } from 'src/types/Generations';
import { PokemonListItem } from 'src/types/PokemonListItem';
import { populatePokemonList } from 'src/utils/populatePokemonList';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Can you name all the pokemons?';
  pokemonList: Array<PokemonListItem> = [];

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service
      .getAllPokemons(Generations.GENERATION_ONE)
      .subscribe((dto) => (this.pokemonList = populatePokemonList(dto)));
  }
}
