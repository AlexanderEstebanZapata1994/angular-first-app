import { Component } from "@angular/core";
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: [`./event-details.component.css`]
})

export class EventDetailComponent {
    event: IEvent;
    addMode: boolean
    constructor (private eventService: EventService, private route: ActivatedRoute, private router:Router){}

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session: ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1; 
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession(){
        this.addMode = false
    }
    
}