import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {BananaService} from '../services/banana.service'
import {bananaLoadedError, bananaLoadedSuccess, retrieveNewBananaItemFromServer} from "./banana.actions";
import {State} from "./banana.reducer";
@Injectable()
export class BananaEffects {

  constructor(
    private actions$: Actions,
    private bananaService: BananaService
  ) {}

  loadBanana$ = createEffect(() => this.actions$.pipe(
    ofType(retrieveNewBananaItemFromServer),
    mergeMap(() => this.bananaService.getBanana()
      .pipe(
        map((data: State) => bananaLoadedSuccess(data)),
        catchError(() => of(bananaLoadedError))
      ))
    )
  );
}
