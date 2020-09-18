import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../shared/auth.service'

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit  {

    constructor(private router: Router, private authService: AuthService){

    }

    profileForm: FormGroup
    ngOnInit(){
        debugger;
        let firstName = new FormControl(this.authService.currentUser.firstName)
        let lastName = new FormControl(this.authService.currentUser.lastName)
        
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    saveProfile(formValues){
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }
}