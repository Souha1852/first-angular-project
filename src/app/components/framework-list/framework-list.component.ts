import { Component, Input, OnInit } from '@angular/core';
import {IFramework} from './framework' ; 
import { FrameworkService } from './framework.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrls: ['./framework-list.component.css']
})
export class FrameworkListComponent implements OnInit {
  public frameworks : IFramework[] = [];
  constructor(public frameworkService : FrameworkService,private router :Router) {
   }
            
  ngOnInit(): void {
    this.frameworkService.getFrameworks().subscribe(data => this.frameworks = data)
  }
  onSelect(framework :IFramework){
          this.router.navigate(['/frameworks',framework.name])
  }
  goBack(){
    this.router.navigate(['/home']);
  }

}
