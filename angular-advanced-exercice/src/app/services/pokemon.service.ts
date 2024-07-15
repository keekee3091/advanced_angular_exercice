import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];

  /**
   * L'algorythme du cours n'était pas bon. En effet, je basais les id sur la longueur du tableau
   * Mais avec la suppression, on pouvait donc se retrouver avec des pokémons avec la même id
   * J'ai donc ajouté cette variable qui permet d'incrémenter à chaque fois l'id
   */
  idIndex = 1;

  constructor(private toastService: ToastService) {

  }

  addPokemon(name: string) {
    this.pokemons.push({
      id: this.idIndex++,
      name,
      sex: Math.random() > 0.5 ? 'male' : 'female',
    });
    this.toastService.show('Pokémon ajouté',`Le Pokémon ${name} a été ajouté`);
  }

  deletePokemon(pokemon: Pokemon) {
    const indexToDelete = this.pokemons.findIndex(currentPokemon => currentPokemon.id === pokemon.id);
    if (indexToDelete < 0) return; // ça ne devrait pas arriver
    this.pokemons.splice(indexToDelete, 1);
    this.toastService.show('Pokémon supprimé',`Le Pokémon ${pokemon.name} a été supprimé`);
  }
}
