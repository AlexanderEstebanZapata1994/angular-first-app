import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from 'src/app/common'
import { AuthService } from '../shared/auth.service'

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit  {
    profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl

    constructor(private router: Router, private authService: AuthService, @Inject(TOASTR_TOKEN) private toastr: Toastr){

    }

    ngOnInit(){
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
        
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    saveProfile(formValues) {
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
            this.router.navigate(['events'])
            this.toastr.success("The profile information has been updated correctly", "User updated")
        }
    }
    cancel(){
        this.router.navigate(['events'])
    }
    validateFirstName(){
        return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName(){
        return this.lastName.valid || this.lastName.untouched;
    }
}