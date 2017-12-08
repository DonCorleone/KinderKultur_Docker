import { Component, OnInit } from '@angular/core';

import { LinkService } from './../../core/services/link-data.service';
import { Link } from './../../models/link';

@Component({
  selector: 'app-links-list',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  public message: string;
  public links: Link[] = [];
  public link: Link = new Link();

  constructor(private dataService: LinkService) {
    this.message = 'Links from the ASP.NET Core API';
  }

  ngOnInit() {
    this.getAllLinks();
  }

  public addLink() {
    this.dataService
      .add(this.link)
      .subscribe(() => {
        this.getAllLinks();
        this.link = new Link();
      }, (error) => {
        console.log(error);
      });
  }

  public deleteLink(thing: Link) {
    this.dataService
      .delete(thing.id)
      .subscribe(() => {
        this.getAllLinks();
      }, (error) => {
        console.log(error);
      });
  }

  private getAllLinks() {
    this.dataService
      .getAll()
      .subscribe(
      data => this.links = data,
      error => console.log(error),
      () => console.log('Get all complete')
      );
  }
}
