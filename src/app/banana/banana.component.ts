import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State} from './store/banana.reducer';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store/app.reducers';
import {
  clearBanana,
  createBanana,
  retrieveNewBananaItemFromServer,
  updateBananaSize,
  updateBananaSizeWithUserValue
} from './store/banana.actions';
import {BananaModel} from './model/banana-model';
import {currentBanana} from '../store/app.selectors';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0.3,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})
export class BananaComponent implements OnInit {
  banana$: Observable<State>;
  bananaSizeOption = BananaModel;
  showSpinner = false;
  isOpen = false;
  disableChanges = true;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(clearBanana());
    this.banana$ = this.store.pipe(select(currentBanana));
    this.banana$.subscribe((value) => {
      this.showSpinner = false;
      // if value is not empty (meaning, we have a banana item) -> do not disable the edit buttons
      this.disableChanges = !value.hasOwnProperty('size');
    });
  }

  newBanana(): void {
    this.isOpen = true;
    this.store.dispatch(createBanana());
  }

  updateBanana(): void {
    this.store.dispatch(updateBananaSize());
  }

  updateBananaSizeWithValue(val: BananaModel): void {
    this.store.dispatch(updateBananaSizeWithUserValue({size: val}));
  }

  retrieveNewBananaItemFromServer(): void {
    this.isOpen = true;
    this.showSpinner = true;
    this.store.dispatch(retrieveNewBananaItemFromServer());
  }

}
