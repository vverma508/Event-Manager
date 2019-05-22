import { Component, OnInit } from '@angular/core';
import { IEvent } from '../common/event.model';
import{RouterLink} from '@angular/router'
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events:Array<IEvent> =[]; 
  constructor(private eventService:EventsService) { }

  ngOnInit() {
    this.GetAllEvents()
  }

  GetAllEvents(){
    this.eventService.GetAllEvents().subscribe((data)=>{
      this.events= <IEvent[]>data;
    })
  }
}
