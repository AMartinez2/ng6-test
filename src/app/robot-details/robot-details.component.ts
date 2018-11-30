import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-robot-details',
  templateUrl: './robot-details.component.html',
  styleUrls: ['./robot-details.component.scss']
})
export class RobotDetailsComponent implements OnInit {
  robot$: Object;
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.robot$ = params.name);
  }

  ngOnInit() {
    // this.robot.getUser(this.robot$).subscribe( data => this.robot$ = data );
    this.data.getRobot(this.robot$).subscribe(
      data => this.robot$ = data
    );
  }

}
