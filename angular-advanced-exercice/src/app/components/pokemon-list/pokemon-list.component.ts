import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  currentPokemonName = '';
  pokemons: Pokemon[] = this.pokemonService.pokemons;

  constructor(private pokemonService: PokemonService) {

  }

  onCreatePokemon() {
    this.pokemonService.addPokemon(this.currentPokemonName);
    this.currentPokemonName = ''; // On vide l'input
  }

  onDeletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemon(pokemon);
  }
}
