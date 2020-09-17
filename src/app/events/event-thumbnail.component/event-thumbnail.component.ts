import { Component, Input } from '@angular/core';
import { IEvent } from '../shared';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent {
    @Input() event:IEvent
    someProperty: string = "some value"
    logCityEvent () {
        console.log(this.event.location.city)
    }

    getTimeClasses(){
        if (!this.event) return [];
        if (this.event.time === '8:00 am') {
            return ["green", "bold"];
        } else if (this.event.time === '10:00 am'){
            return ["darkred", "bold"];
        } else {
            return ["bold"];
        }
    }
}
