import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import {
  CreateEventComponent,
  EventDetailComponent,
  EventListResolver,
  EventRouterActivator,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  CreateSessionComponent
} from './events'

import { Error404Component } from './errors'
import { EventsAppComponent } from './events-app.component';
import { appRoutes } from './routes'
import { ToastrService } from './common';
import { NavBarComponent } from './nav/nav-bar.component';
import { AuthService } from './user/shared/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouterActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', 
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
