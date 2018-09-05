import { Component, OnInit } from '@angular/core';

import { LinkService } from './../../core/services/link-data.service';
import { Link } from './../../models/link';
import { ConfigService } from '../../shared/utils/config.service';

@Component({
	selector: 'app-links-list',
	templateUrl: './links.component.html',
	styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

	public message: string;
	public links: Link[] = [];
	staticImagesUri: string;

	constructor(
		private dataService: LinkService,
		private configService: ConfigService
	) {
		this.message = 'Links from the ASP.NET Core API';
		this.staticImagesUri = configService.getStaticURI() + '/images/';
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
