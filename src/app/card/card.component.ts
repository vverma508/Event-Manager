import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../common/event.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card:IEvent;
  constructor() { }

  ngOnInit() {
  }

}
