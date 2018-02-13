import { Component, OnInit } from '@angular/core';

import { LinkService } from './../../core/services/link-data.service';
import { Link } from './../../models/link';

@Component({
	selector: 'app-links-editable-detail-list',
	templateUrl: './linksEditable-detail.component.html',
	styleUrls: ['./linksEditable-detail.component.scss']
})
export class LinksEditableDetailComponent implements OnInit {

	message: string;
	links: Link[] = [];
	link: Link = new Link();
	selectedLink: Link;

	constructor(private dataService: LinkService) {
		this.message = 'Editable Link from the ASP.NET Core API';
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

	public onSelect(link: Link): void {
		this.selectedLink = link;
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
