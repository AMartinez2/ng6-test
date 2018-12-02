import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { RobotsComponent } from './robots/robots.component';
import { RobotDetailsComponent } from './robot-details/robot-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'robotDetails/:name',
    component: RobotDetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'robots',
    component: RobotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
