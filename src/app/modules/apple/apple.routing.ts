import {RouterModule, Routes} from '@angular/router';
import {AppleComponent} from './component/apple.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [{ path: '', component: AppleComponent}];

export const appleRouting: ModuleWithProviders = RouterModule.forChild(routes);
