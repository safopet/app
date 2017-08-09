import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendingMachineComponent }   from './vending-machine.component';

const routes: Routes = [
  { path: '', redirectTo: '/vending-machine', pathMatch: 'full' },
  { path: 'vending-machine',  component: VendingMachineComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
