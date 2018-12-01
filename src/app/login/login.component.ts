import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users$: Object;
  constructor(
    private dataService: DataService,
    private router: Router) {
    // Get all users
    this.dataService.getAllUsers().subscribe(
      data => {
        this.users$ = data;
      }
    );
  }

  ngOnInit() {
  }

  loginAttempt(event) {
    localStorage.clear();
    // Retrieve the login form data from the DOM
    event.preventDefault();
    const target = event.target;
    const DomUn = target.querySelector('#username').value;
    const DomPw = target.querySelector('#password').value;
    // Check to see if given user matches user in db
    for (const usr in this.users$) {
      if (DomUn === this.users$[usr]['usid']) {
        this.router.navigate(['/robots']);
        // Store user name in local storage
        localStorage.setItem('USER', DomUn);
      }
    }
  }

}
