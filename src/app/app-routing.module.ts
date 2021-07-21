import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameworkDetailComponent } from './components/framework-detail/framework-detail.component';
import { FrameworkListComponent } from './components/framework-list/framework-list.component';
import { RelatedTopicInfoComponent } from './components/related-topic-info/related-topic-info.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import{PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  {path:'' , component : WelcomePageComponent},
  {path:'home' , component : WelcomePageComponent},
  {path:'frameworks' , component : FrameworkListComponent},
  {path:'frameworks/:name' , component : FrameworkDetailComponent},
  {path:':id', component: RelatedTopicInfoComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
