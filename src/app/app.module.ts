import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { appRoutes } from './routes'
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailComponent } from './events/event-details.component/event-details.component';
import { CreateEventComponent } from './events/create-event.component/create-event.component';
import { Error404Component } from './events/errors/404.component';
import { EventRouterActivator } from './events/event-details.component/event-router-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CreateEventComponent, 
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouterActivator
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
