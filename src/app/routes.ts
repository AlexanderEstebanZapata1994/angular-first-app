import { Routes } from '@angular/router'
import { EventDetailComponent } from './events/event-details.component/event-details.component';
import { EventsListComponent } from './events/events-list.component/events-list.component';

export const appRoutes : Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]