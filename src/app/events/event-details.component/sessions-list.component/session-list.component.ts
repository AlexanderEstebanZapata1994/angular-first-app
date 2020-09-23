import { Component, Input, OnInit } from "@angular/core";
import { ISession } from '../../shared';

@Component({
    selector: 'session-list-app',
    templateUrl: './session-list.component.html',
    styleUrls: ['./session-list.component.css']
})

export class SessionListComponent implements OnInit {
    @Input() sessions: ISession[]

    constructor(){

    }
    ngOnInit() {

    }
}