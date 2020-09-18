import {Component} from '@angular/core';
import { AuthService } from '../user/shared/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
    constructor(public auth: AuthService){

    }
}