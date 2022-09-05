import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeScreen } from './homeScreen.page';

const routes: Routes = [
  {
    path: 'homeScreen',
    component: homeScreen,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homeScreenRoutingModule {}
