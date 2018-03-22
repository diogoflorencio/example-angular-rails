import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { toast } from 'angular2-materialize';

import { ComicService }  from '../comic.service';
import { Comic } from '../comic';
import { ComicsComponent } from '../comics/comics.component';

@Component({
  selector: 'app-new-comic',
  templateUrl: './new-comic.component.html',
  styleUrls: ['./new-comic.component.css']
})
export class NewComicComponent implements OnInit {

  constructor(
    private comicService: ComicService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  add(title:string, superhero:string, edition:number):void {
    title = title.trim();
    superhero = superhero.trim();
    if (!title || !superhero) {
      toast(`Data Missing`, 4000);  
      return;
    }
    this.comicService.post({ title, superhero, edition } as Comic)
    .subscribe();
    toast(`Saved!`, 4000);
  }

}
