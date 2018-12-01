import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.scss']
})
export class RobotsComponent implements OnInit {

  robots$: Object;
  constructor(private rdataService: DataService) { }

  ngOnInit() {
    this.rdataService.getUsers().subscribe(
      data => this.robots$ = data
    );
  }

}
