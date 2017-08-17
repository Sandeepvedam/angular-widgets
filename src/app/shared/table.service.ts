import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiEndPoint, TableData } from './../app.settings';

@Injectable()
export class TableService{

  public headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");

  }

  getTableMockData(){
    //let URL=`${ApiEndPoint.BASE_URL}${TableData.DATA_URL}`;
    let URL = './assets/datatable.json';
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
