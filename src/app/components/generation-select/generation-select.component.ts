import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/service/pokemon.service';
import { Generations } from 'src/types/Generations';
import { PokemonListItem } from 'src/types/PokemonListItem';
import { getGeneration } from 'src/utils/getGeneration';
import { populatePokemonList } from 'src/utils/populatePokemonList';

@Component({
  selector: 'app-generation-select',
  templateUrl: './generation-select.component.html',
  styleUrls: ['./generation-select.component.scss'],
})
export class GenerationSelectComponent implements OnInit {
  generations = Object.keys(Generations);
  @Input() pokemonList: Array<PokemonListItem> = [];
  @Output() pokemonListChange = new EventEmitter<Array<PokemonListItem>>();

  constructor(private service: PokemonService) {}

  ngOnInit(): void {}

  onSelectChange(event: Event) {
    const generationSelected = (event.target as HTMLInputElement).value;

    const endpoint = getGeneration(generationSelected);

    if (endpoint === '') return;

    this.service.getAllPokemons(endpoint).subscribe((dto) => {
      this.pokemonList = populatePokemonList(dto);
      this.pokemonListChange.emit(this.pokemonList);
    });
  }
}
