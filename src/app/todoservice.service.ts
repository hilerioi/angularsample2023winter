import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  hostUrl:string = '/'; //https://todoapp2023winter.azurewebsites.net/';
  //hostUrl:string = 'http://localhost:8080/';
  path:string = 'app/list';

  constructor(private http: HttpClient) { }

  getInfo() {
    let output = [{firstname: 'Israel', lastname: 'Hilerio'},
                  {firstname: 'Pedro', lastname: 'Torres'}];
    return output;
  }

  getList() {
    return this.http.get(this.hostUrl + this.path);
  }
}
