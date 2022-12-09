import { Component, OnInit, Input } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { PokemonListItem } from 'src/types/PokemonListItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  faQuestion = faQuestion;
  @Input() pokemonList: Array<PokemonListItem> = [];

  constructor() {}

  ngOnInit(): void {}
}
