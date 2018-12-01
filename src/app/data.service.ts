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
  getAllUsers() {
    return this.http.get('https://user-ms-438.herokuapp.com/allUsers');
  }
  getUser(name) {
    return this.http.get('https://robot-ms.herokuapp.com/name/' + name);
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
