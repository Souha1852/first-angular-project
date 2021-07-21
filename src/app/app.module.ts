import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { ListComponent } from './components/list/list.component';
import { RelatedTopicsComponent } from './components/related-topics/related-topics.component';
import { TitleComponent } from './components/title/title.component';
import { FrameworkListComponent } from './components/framework-list/framework-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FrameworkDetailComponent } from './components/framework-detail/framework-detail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RelatedTopicInfoComponent } from './components/related-topic-info/related-topic-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ListComponent,
    RelatedTopicsComponent,
    TitleComponent,
    FrameworkListComponent,
    WelcomePageComponent,
    FrameworkDetailComponent,
    NavBarComponent,
    RelatedTopicInfoComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
