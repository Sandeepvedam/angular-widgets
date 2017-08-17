import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiEndPoint, TagsData } from './../app.settings';

@Injectable()
export class TagsService{

  public headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");

  }

  getTagsMockData(){
    let URL=`${ApiEndPoint.BASE_URL}${TagsData.DATA_URL}`;
    //let URL = './assets/chartData.json';
    return this.http.get(URL,{headers: this.headers})
      .map((res: Response) => {
        return res.json();
      }).catch(this.handleError);
  }


  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
