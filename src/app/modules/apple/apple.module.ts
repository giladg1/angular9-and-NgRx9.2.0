import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppleComponent } from './component/apple.component';
import {appleRouting} from './apple.routing';
import {StoreModule} from '@ngrx/store';
import * as FromApple from './store/apple.reducer';
import {MaterialModule} from '../../core/material/material.module';

@NgModule({
  declarations: [AppleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    appleRouting,
    StoreModule.forFeature('apple', FromApple.reducer),
  ],
  bootstrap: [AppleComponent]
})
export class AppleModule { }
