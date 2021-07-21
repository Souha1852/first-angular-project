import { Component, OnInit , Output} from '@angular/core';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public visible : boolean = true ;
  @Output() out : EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.visible = false ;
    this.out.emit(false);
  }

}
