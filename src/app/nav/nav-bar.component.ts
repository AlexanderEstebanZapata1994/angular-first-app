import {Component} from '@angular/core';
import { EventService, ISession } from '../events';
import { AuthService } from '../user/shared/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];
    constructor(public auth: AuthService, private eventService: EventService){

    }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        })
    }
}