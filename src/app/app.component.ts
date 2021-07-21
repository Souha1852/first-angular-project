import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public visibility :boolean = true ; 
  title = 'my-project';
  changeVisibility() {
    this.visibility=false ;
  }
  }

