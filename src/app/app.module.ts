import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { MenuComponent } from './menu/menu.component';
import { NewComicComponent } from './new-comic/new-comic.component';
import { ComicService } from './comic.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicDetailsComponent,
    MenuComponent,
    NewComicComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
