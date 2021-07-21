import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFramework } from './framework';
@Injectable({
  providedIn: 'root'
})
export class FrameworkService {
public url ="assets/data/frameworks.json";
  constructor(private http : HttpClient) {

   }
   getFrameworks(){
     return this.http.get<IFramework[]>(this.url);
   }
}
