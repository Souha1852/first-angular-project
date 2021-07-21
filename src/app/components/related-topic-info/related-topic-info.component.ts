import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ITopic } from '../related-topics/topic';
import { TopicsService } from '../related-topics/topics.service';

@Component({
  selector: 'app-related-topic-info',
  templateUrl: './related-topic-info.component.html',
  styleUrls: ['./related-topic-info.component.css']
})
export class RelatedTopicInfoComponent implements OnInit {
public topics : ITopic[] = [];
public id! :Number ;
  constructor(private topicService : TopicsService , private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe(data => this.topics = data);
    this.route.paramMap.subscribe((params :ParamMap) => {let id = params.get('id')
    if(id != null) {this.id =parseInt(id) }} );
  }
goBack(){
  this.router.navigate(['../']);
}
}
