import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {BananaService} from '../service/banana.service'
import {bananaLoadedSuccess, retrieveNewBananaItemFromServer} from "./banana.actions";
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
        map(data => bananaLoadedSuccess(data)),
        catchError(() => of({ type: '[Banana Item] Banana Loaded Error' }))
      ))
    )
  );
}
