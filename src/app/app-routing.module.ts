import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoundDetailsComponent } from './round-details/round-details.component';


const routes: Routes = [
  { path: 'round/:id', component: RoundDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
