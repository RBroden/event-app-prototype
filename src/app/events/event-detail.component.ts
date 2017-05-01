import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }from '@angular/router';

import { EventService } from '../_services/event.service';

import { Event } from '../_models/event.model';

@Component({
    template: `
        <h1>Event Detail</h1>
        <div class="detail-container">
            <nav>
                <a routerLink="/events">Back to Events</a>
            </nav>
            <div *ngIf="event">
                <p>
                    {{ event?.name }} on {{ event?.location.name }}
                </p>
                <ul>
                    <li *ngFor="let tag of event?.tags">
                        {{ tag.name }}
                    </li>
                </ul>
            </div>
        </div>
    `,
    styleUrls: ['./_styles/event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

    event: Event;
    errorMessage: string;

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.eventService.getEvent(+params['id']))
            .subscribe(
                event => this.setEvent(event),
                error =>  this.errorMessage = <any>error
            );
    }

    private setEvent(event: Event): void{
        this.event = event;
    }
    
}