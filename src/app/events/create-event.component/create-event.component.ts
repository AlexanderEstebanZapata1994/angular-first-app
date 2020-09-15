import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'crete-event-app',
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent implements OnInit {
    constructor (private router: Router){

    }
    ngOnInit () {

    }

    cancel() {
        this.router.navigate(['/events'])
    }
}