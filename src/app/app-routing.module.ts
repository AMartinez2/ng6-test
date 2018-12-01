import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { RobotsComponent } from './robots/robots.component';
import { RobotDetailsComponent } from './robot-details/robot-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
<<<<<<< HEAD
    path: 'name/:name',
=======
    path: 'robots',
    component: RobotsComponent
  },
  {
    path: 'details/:name',
>>>>>>> 18d64f830f371cbc935d23ed2e8bdb44434de4d6
    component: DetailsComponent
  },
  {
    path: 'robotDetails/:name',
    component: RobotDetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
