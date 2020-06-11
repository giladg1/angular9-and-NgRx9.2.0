import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {State} from "./store/banana.reducer";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/app.reducers";
import {
  createBanana,
  retrieveNewBananaItemFromServer,
  updateBananaSize,
  updateBananaSizeWithUserValue
} from "./store/banana.actions";
import {BananaModel} from "./model/banana-model";
import {currentBanana} from "../store/app.selectors";

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.scss']
})
export class BananaComponent implements OnInit {
  banana$: Observable<State>
  bananaSizeOption = BananaModel;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.banana$ = this.store.pipe(select(currentBanana));
  }

  newBanana(): void {
    this.store.dispatch(createBanana())
  }

  updateBanana(): void {
    this.store.dispatch(updateBananaSize())
  }

  updateBananaSizeWithValue(val: BananaModel): void {
    this.store.dispatch(updateBananaSizeWithUserValue({size: BananaModel.SMALL}))
  }

  retrieveNewBananaItemFromServer(): void {
    this.store.dispatch(retrieveNewBananaItemFromServer());
  }

}
