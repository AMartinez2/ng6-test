import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {  }
  getUsers() {
    return this.http.get('https://robot-ms.herokuapp.com/allRobots');
  }
  getUser(name) {
    return this.http.get('https://robot-ms.herokuapp.com/name/' + name);
  }
  getPosts() {
    return this.http.get('https://robot-ms.herokuapp.com/allRobots');
  }
}
