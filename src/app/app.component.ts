import { Component, OnInit } from '@angular/core';
import { DtoPokemonGetObject } from 'src/types/PokemonApi';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pokemonList: Array<DtoPokemonGetObject> = [];

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service
      .getAllPokemons()
      .subscribe((dto) => (this.pokemonList = dto.results));
  }
}
