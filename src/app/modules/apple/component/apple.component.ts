import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {State} from '../store/apple.reducer'
import {select, Store} from "@ngrx/store";
import {createApple, removeApple} from "../store/apple.actions";
import {AppState} from "../../../store/app.reducers";
import {currentApple} from "../store/apple.selector";

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})
export class AppleComponent implements OnInit {
  apple$: Observable<State>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.apple$ = this.store.pipe(select(currentApple))
  }

  createApple(): void {
    this.store.dispatch(createApple())
  }

  clearApple(): void {
    this.store.dispatch(removeApple())
  }

}
