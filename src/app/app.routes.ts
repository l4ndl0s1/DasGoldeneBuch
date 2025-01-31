import { Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { RetrospectComponent } from './retrospect/retrospect.component';
import { HeroComponent } from './hero/hero.component';
import { ArchiveComponent } from './archive/archive.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'retrospect', component: RetrospectComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: '**', redirectTo: '' },
];
