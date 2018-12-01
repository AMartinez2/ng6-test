import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.scss']
})
export class RobotsComponent implements OnInit {

  robots$: Object;
  constructor(private rdataService: DataService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('USER') == null) {
      this.router.navigate(['/login']);
    }
    this.rdataService.getRobots().subscribe(
      data => this.robots$ = data
    );
  }

}
