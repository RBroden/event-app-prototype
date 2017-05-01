import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './_services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { EventListComponent, EventDetailComponent } from './events';
import { PageNotFoundComponent } from './not-found.component';

import { EventService } from './_services/event.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    EventListComponent,
    EventDetailComponent,
    PageNotFoundComponent
  ],
  providers: [
    EventService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
