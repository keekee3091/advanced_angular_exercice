import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonSexHighlightBackgroundDirective } from './directives/pokemon-sex-highlight-background.directive';
import { TopPokemonsComponent } from './components/top-pokemons/top-pokemons.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonItemComponent,
    PokemonSexHighlightBackgroundDirective,
    TopPokemonsComponent,
    ToastContainerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
