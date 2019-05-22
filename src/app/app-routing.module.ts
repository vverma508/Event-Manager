import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventFormComponent } from './event-form/event-form.component';

const routes: Routes = [
  {path:"",component:EventsComponent},
  {path:"create", component:EventFormComponent},
  {path:"update/:id", component:EventFormComponent},
  {path:"delete/:id", component:EventFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
