import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent, EventDetailComponent } from './events';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}