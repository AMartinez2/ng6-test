import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {  }
  getRobots() {
    return this.http.get('https://robot-ms.herokuapp.com/allRobots');
  }
  getRobot(name) {
    return this.http.get('https://robot-ms.herokuapp.com/name/' + name);
  }
  getUsers() {
    return this.http.get('https://robot-ms.herokuapp.com/allRobots');
  }
  getUser(name) {
    return this.http.get('https://robot-ms.herokuapp.com/name/' + name);
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
