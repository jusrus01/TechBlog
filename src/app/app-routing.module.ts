import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { HomeComponent } from './modules/home/home.component';
import { PostComponent } from './modules/post/post.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'post/:fileName',
        component: PostComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
