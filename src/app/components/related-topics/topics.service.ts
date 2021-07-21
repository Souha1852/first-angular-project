import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {ITopic} from './topic';
@Injectable({
  providedIn: 'root'
})
export class TopicsService implements OnInit{
public url = "assets/data/topics.json";
  constructor(private http :HttpClient) { }
  ngOnInit(){

  }
  getTopics (){
    return this.http.get<ITopic[]>(this.url);
  }
}
