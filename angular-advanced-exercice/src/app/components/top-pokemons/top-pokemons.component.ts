import { Component } from '@angular/core';
import { Pokemon, PokemonSex } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-top-pokemons',
  templateUrl: './top-pokemons.component.html',
  styleUrls: ['./top-pokemons.component.scss'],
})
export class TopPokemonsComponent {
  maxPokemonsToShow = 3;
  pokemons: Pokemon[] = this.pokemonService.pokemons;
  currentPokemon?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  onPokemonClick(index: number) {
    this.currentPokemon = this.pokemons[index];
  }

  unselectPokemon() {
    this.currentPokemon = undefined;
  }

  /**
   * Nous sommes obligés de remplacer tout l'objet pokémon de la liste
   * pour que le changement de sex ait un effet direct sur la liste de pokémons
   * Encore une histoire de copie par référence
   * Si on change seulement le sex du pokemon,
   * aucun changedetection Angular ne sera lancé et la couleur du pokémon ne changera que si on change d'onglet
   */
  onPokemonSexChange(event: Event) {
    if (!this.currentPokemon) return;
    const selectElt = event.target as HTMLSelectElement;
    const newSex = selectElt.value as PokemonSex;
    this.pokemons[this.currentPokemon?.id - 1] = {
      ...this.currentPokemon,
      sex: newSex,
    };
  }
}
