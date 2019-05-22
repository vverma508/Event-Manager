import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

 
@Injectable(
  {providedIn:"root"}
)

export class EventsService{

baseUrl:string =  environment.baseUrl||"http://localhost:8080/";
constructor(private http:HttpClient) {

}
  GetAllEvents(){
  return this.http.get(this.baseUrl+"GetAll?collection=events");
  }
  AddNewEvent(card){
    return this.http.post(this.baseUrl+'event?collection=events',card)
  }
  GetEvent(eventId){
  return this.http.get(this.baseUrl+"Get?collection=events&id="+eventId)
  }
  UpdateEvent(card){
  return this.http.post(this.baseUrl+'update?collection=events',card)
  }
  DeleteEvent(eventId){
    return this.http.delete(this.baseUrl+'delete?collection=events&id='+eventId)
  }
}