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

	constructor(private dataService: LinkService) {
		this.message = 'Links from the ASP.NET Core API';
	}

	ngOnInit() {
		this.getAllLinks();
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
