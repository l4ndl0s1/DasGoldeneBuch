import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { ArchiveComponent } from './archive/archive.component';
import { TeamComponent } from './team/team.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { RetrospectComponent } from './retrospect/retrospect.component';
import { routes } from './app.routes';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { MissionHeaderComponent } from './mission-header/mission-header.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsListComponent,
    AboutComponent,
    MissionComponent,
    TeamComponent,
    SupportComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    RetrospectComponent,
    AboutHeaderComponent,
    MissionHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HeroComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
