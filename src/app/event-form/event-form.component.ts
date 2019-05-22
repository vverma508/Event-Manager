import { Component, OnInit } from '@angular/core';
import { IEvent } from '../common/event.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../events/events.service';



@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  card:IEvent=<IEvent>{};
  isCreate:boolean=true;
  eventId:number;
  constructor(private route: ActivatedRoute,
    private router:Router
    ,private eventService:EventsService) { }

  ngOnInit() {
    var id= this.route.snapshot.paramMap.get('id');
    if(id){
      this.isCreate=false;
      this.eventId= parseInt(id);
      this.GetEvent();
    }
  }

  AddNewEvent(){
    this.card.CreatedDate= new Date();
    this.card.EventId=Date.now();
    this.eventService.AddNewEvent(this.card).subscribe((data)=>{
      this.router.navigate(['']);
   });
  }

  GetEvent(){
    this.eventService.GetEvent(this.eventId).subscribe((data)=>{
      this.card= <IEvent>data;
    })
  }

  UpdateEvent(){
    this.eventService.UpdateEvent(this.card).subscribe((data)=>{
      this.router.navigate(['']);
   });
  }
}
