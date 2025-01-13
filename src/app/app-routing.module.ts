import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { ArchiveComponent } from './archive/archive.component';
import { TeamComponent } from './team/team.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },

  { path: 'about', component: AboutComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'team', component: TeamComponent },
  { path: 'support', component: SupportComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
