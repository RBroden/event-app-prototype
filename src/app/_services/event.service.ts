import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Event } from '../_models/event.model';

import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {
    private events: Event[];
    private currentEventId: number;
    // BehaviorSubject has next() and asObservable() method
    private eventsObservable: BehaviorSubject<Event[]> = new BehaviorSubject(null);
    private currentEventObservable: BehaviorSubject<Event> = new BehaviorSubject(null);
    private headers = new Headers({'Content-Type': 'application/json'});
    private eventsUrl = 'api/events';  // URL to web api

    constructor(private http: Http) {
        this.requestEvents()
            .then(events => this.setEvents(events));
    }

    // request events from server
    requestEvents(){
        console.log("Server Call");
        return this.http.get(this.eventsUrl)
               .toPromise()
               .then(response => response.json().data as Event[])
               .catch(this.handleError);
    }

    getEvents(): Observable<Event[]>{
        return this.eventsObservable.asObservable()
            .catch(this.handleError);
    }

    getEvent(id: number): Observable<Event> {
        this.setCurrentEventId(id);
        return this.currentEventObservable.asObservable()
            .catch(this.handleError);
    }

    private setEvents(events: Event[]): void {
        this.events = events;
        this.updateEvents();
    }

    private setCurrentEventId(id: number): void {
        this.currentEventId = id;
        this.updateCurrentEvent();
    }

    private updateEvents() {
        this.eventsObservable.next(this.events);
        this.updateCurrentEvent();
    }

    private updateCurrentEvent() {
        if(!this.events) return; // guard
        let event = this.events.find( (event: Event) => event.id === this.currentEventId);
        this.currentEventObservable.next(event);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}
