import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'p1', component: P1Component},
  {path: 'p2', component: P2Component},
  {path: 'p3', component: P3Component},
  {path: '', component: P1Component}
];

@NgModule({
//  imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
