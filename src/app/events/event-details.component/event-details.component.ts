import { Component } from "@angular/core";
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: [`./event-details.component.css`]
})

export class EventDetailComponent {
    event: any;
    constructor (private eventService: EventService){

    }
    ngOnInit(){
        this.event = this.eventService.getEvent(1);
    }
}