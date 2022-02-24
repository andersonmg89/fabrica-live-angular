import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input()
  public pokemon: Pokemon;
}
