import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComicsComponent }      from './comics/comics.component';
import { NewComicComponent } from './new-comic/new-comic.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  { path: 'comics', component: ComicsComponent },
  { path: 'new-comic', component: NewComicComponent },
  { path: 'comic-details/:id', component: ComicDetailsComponent }
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
