import { Routes } from '@angular/router'
import { EventDetailComponent } from './events/event-details.component/event-details.component';
import { EventsListComponent } from './events/events-list.component/events-list.component';
import { CreateEventComponent } from './events/create-event.component/create-event.component';
import { Error404Component } from './events/errors/404.component';
import { EventRouterActivator } from './events/event-details.component/event-router-activator.service';

export const appRoutes : Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouterActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]