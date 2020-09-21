import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from '../shared';
import { restrictedWords } from '../shared';

@Component({
    selector: 'create-session-app',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})

export class CreateSessionComponent implements OnInit {
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl
    voters: FormControl

    constructor(private router: Router){

    }
    ngOnInit (){
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['bar', 'foo'])])
        
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter, 
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues){
        const {name, duration, presenter, level, abstract } = formValues
        let session: ISession = {
            id: undefined,
            name,
            duration, 
            presenter,
            level,
            abstract,
            voters: []
        }

        console.log(session)
    }

        
}