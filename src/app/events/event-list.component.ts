import { Component, OnInit } from '@angular/core';

import { EventService } from '../_services/event.service';

import { Event } from '../_models/event.model';

@Component({
    template: `
        <h1>Solar System Events</h1>
        <div class="grid grid-pad">
            <a *ngFor="let event of events"  [routerLink]="['/event', event.id]"  class="col-1-4">
                <div class="module">
                    <h4>{{event.name}}</h4>
                </div>
            </a>
        </div>
    `,
    styleUrls: ['./_styles/event-list.component.css']
})
export class EventListComponent implements OnInit {
    events: Event[];
    errorMessage: string;

    constructor(private eventService: EventService) {

    }

    ngOnInit() {
        this.eventService.getEvents()
            .subscribe(
                events => this.setEvents(events),
                error => this.errorMessage = <any>error
            );
    }

    private setEvents(events: Event[]): void{
        this.events = events;
    }

}