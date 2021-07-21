import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFramework } from '../framework-list/framework';
import { FrameworkService } from '../framework-list/framework.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public frameworks : IFramework[] = [];
  constructor(private route :ActivatedRoute , private router:Router , private frameworkService : FrameworkService ) { }

  ngOnInit(): void {
    this.frameworkService.getFrameworks().subscribe(data => this.frameworks = data );
  }
  goBack(){
    this.router.navigate(['/frameworks']);
  }
  goPrevious(){
    let name = this.route.snapshot.paramMap.get('name');
    let previousId! : number ;
    let previousName! : string ;
    for (let framework of this.frameworks){
      if (framework.name == name) {
         previousId = framework.id -1 ;
      }
    }
    for (let framework of this.frameworks){
    if (framework.id == previousId)
      previousName = framework.name;
    }
    this.router.navigate(['/frameworks',previousName]);
  }
  goNext(){
      let name = this.route.snapshot.paramMap.get('name');
      let previousId! : number ;
      let previousName! : string ;
      for (let framework of this.frameworks){
        if (framework.name == name) {
           previousId = framework.id +1 ;
        }
      }
      for (let framework of this.frameworks){
      if (framework.id == previousId)
        previousName = framework.name;
      }
      this.router.navigate(['/frameworks',previousName]);
  }

}
