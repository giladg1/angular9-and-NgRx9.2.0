import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BananaComponent} from './banana/banana.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {combinedReducers} from "./store/app.reducers";
import {environment} from "../environments/environment";
import {EffectsModule} from '@ngrx/effects';
import {BananaEffects} from "./banana/store/banana.effects";

@NgModule({
  declarations: [
    AppComponent,
    BananaComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(combinedReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([BananaEffects]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
