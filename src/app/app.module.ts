import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CreateEventComponent,
  EventDetailComponent,
  EventListResolver,
  EventRouterActivator,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  CreateSessionComponent, 
  SessionListComponent,
  DurationPipe, 
  UpvoteComponent, 
  VoterService
} from './events'

import { 
  TOASTR_TOKEN, 
  CollapsibleWellComponent, 
  Toastr, 
  JQ_TOKEN, 
  SimpleModalComponent, 
  ModalTriggerDirective 
} from './common';

import { Error404Component } from './errors'
import { EventsAppComponent } from './events-app.component';
import { appRoutes } from './routes'
import { NavBarComponent } from './nav/nav-bar.component';
import { AuthService } from './user/shared/auth.service';


let toastr:Toastr = window['toastr'];
let jQuery = window['$'];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleWellComponent, 
    DurationPipe, 
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  providers: [
    EventService,
    EventRouterActivator,
    EventListResolver,
    AuthService,
    VoterService,
    {
      provide: TOASTR_TOKEN, 
      useValue: toastr
    },
    {
      provide: JQ_TOKEN, 
      useValue: jQuery
    },
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState (component: CreateEventComponent) {
  
  if (component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }else  {
    return true;
  }
  
}
