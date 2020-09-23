import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from '../shared';

@Component({
    selector: 'create-event-app',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

    
    newEvent: IEvent
    isDirty: boolean = true;
    constructor (private router: Router, private eventService: EventService){}
    ngOnInit(){}
    
    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
    
}