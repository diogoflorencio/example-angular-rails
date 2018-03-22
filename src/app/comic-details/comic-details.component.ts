import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { toast } from 'angular2-materialize';

import { ComicService }  from '../comic.service';
import { Comic } from '../comic';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  comic:Comic;

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getComic();
  }

  getComic(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.comicService.getComic(id)
        .subscribe(comic => this.comic = comic);
  }

  save(): void {
    this.comicService.update(this.comic)
      .subscribe();
     toast(`Saved!`, 4000);
  }

  delete(): void {
    this.comicService.delete(this.comic)
      .subscribe();
    toast(`Delete!`, 4000);
  }

}
