import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppleComponent } from './component/apple.component';
import {appleRouting} from "./apple.routing";
import {StoreModule} from "@ngrx/store";
import * as FromApple from './store/apple.reducer'



@NgModule({
  declarations: [AppleComponent],
  imports: [
    CommonModule,
    appleRouting,
    StoreModule.forFeature('apple', FromApple.reducer),
  ],
  bootstrap: [AppleComponent]
})
export class AppleModule { }
