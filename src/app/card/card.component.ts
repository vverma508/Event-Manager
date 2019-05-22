import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../common/event.model';
import { EventsService } from '../events/events.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card:IEvent;
  isDelete:boolean=false;
  constructor(private eventService:EventsService) { }

  ngOnInit() {
  }
  DeleteEvent(){
    this.eventService.DeleteEvent(this.card.EventId).subscribe((data)=>{
      this.card=null;
      this.isDelete=<boolean>data;
    })
  }
  JoinEvent(){
    this.card.Joinee=this.card.Joinee?this.card.Joinee +1:1;
      this.eventService.UpdateEvent(this.card).subscribe((data)=>{
        console.log(data);
     });
    }

}
