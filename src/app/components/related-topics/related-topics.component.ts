import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITopic } from './topic';
import { TopicsService } from './topics.service';

@Component({
  selector: 'app-related-topics',
  templateUrl: './related-topics.component.html',
  styleUrls: ['./related-topics.component.css']
})
export class RelatedTopicsComponent implements OnInit {
  public id = Number ;
  public description = String;
  public topics : ITopic[] = [];
  constructor(private topicsService :TopicsService , private router:Router) {
   }

  ngOnInit(): void {
    this.topicsService.getTopics().subscribe (data => this.topics = data )
  }
 readMore(topic:ITopic){
   this.router.navigate(['/',topic.id])
 }
}
