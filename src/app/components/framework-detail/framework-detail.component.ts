import { Component, OnInit } from '@angular/core';;
import { ActivatedRoute ,ParamMap,Router } from '@angular/router';
import { FrameworkService } from '../framework-list/framework.service';
@Component({
  selector: 'app-framework-detail',
  templateUrl: './framework-detail.component.html',
  styleUrls: ['./framework-detail.component.css']
})
export class FrameworkDetailComponent implements OnInit {
public name :string = "";
  constructor(private route :ActivatedRoute , private router:Router , private frameworkService : FrameworkService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params :ParamMap) => {let name = params.get('name')
                                                         if(name != null) {this.name =name }} );

  }
}
