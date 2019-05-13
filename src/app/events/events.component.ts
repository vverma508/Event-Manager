import { Component, OnInit } from '@angular/core';
import { IEvent } from '../common/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events:Array<IEvent> = [
    {
      Name:"first event",
      CreateUserId:1,
      CreatedBy:"Vivek Verma",
      CreatedDate:new Date(),
      Description:"first event created by me dfcsdcdscdscdscd cds csd cds cd sc sdc dsc ds sd cdscdscssssssssssssssssssssssssssss  sd cs c sc dsc s cs cs c",
      EventDate :new Date("20/12/2019"),
      ImageUrl:null,
      Joinee:12,
      Likes:12,
      Venue:"bangalore",
      EventId:1
    },
    {
      Name:"second event",
      CreateUserId:1,
      CreatedBy:"Vivek Verma",
      CreatedDate:new Date(),
      Description:"first event created by me",
      EventDate :new Date("20/12/2019"),
      ImageUrl:null,
      Joinee:12,
      Likes:12,
      Venue:"bangalore",
      EventId:2
    },
    {
      Name:"third event",
      CreateUserId:1,
      CreatedBy:"Vivek Verma",
      CreatedDate:new Date(),
      Description:"first event created by me",
      EventDate :new Date("20/12/2019"),
      ImageUrl:null,
      Joinee:12,
      Likes:12,
      Venue:"bangalore",
      EventId:3
    },
    {
      Name:"fourth event",
      CreateUserId:1,
      CreatedBy:"Vivek Verma",
      CreatedDate:new Date(),
      Description:"first event created by me",
      EventDate :new Date("20/12/2019"),
      ImageUrl:null,
      Joinee:12,
      Likes:12,
      Venue:"bangalore",
      EventId:4
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
