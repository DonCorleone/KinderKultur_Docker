import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LinkService } from './../../core/services/link-data.service';
import { Link } from './../../models/link';

@Component({
	selector: 'app-links-editable-list',
	templateUrl: './linksEditable.component.html',
	styleUrls: ['./linksEditable.component.scss']
})
export class LinksEditableComponent implements OnInit {

	message: string;
	links: Link[] = [];
	selectedLink: Link;

	constructor(
		private router: Router,
		private dataService: LinkService) { }

	ngOnInit() {
		this.getAllLinks();
	}

	// addLink() {
	// 	this.dataService
	// 		.add(this.link)
	// 		.subscribe(() => {
	// 			this.getAllLinks();
	// 			this.link = new Link();
	// 		}, (error) => {
	// 			console.log(error);
	// 		});
	// }

	deleteLink(link: Link): void {
		this.dataService
			.delete(link.id)
			.then(() => {
				this.links = this.links.filter(h => h !== link);
				if (this.selectedLink === link) { this.selectedLink = null; }
			});
	}

	onSelect(link: Link): void {
		this.selectedLink = link;
		this.gotoDetail();
	}

	getAllLinks() {
		this.dataService
			.getAll()
			.subscribe(
				data => this.links = data,
				error => console.log(error),
				() => console.log('Get all complete')
			);
	}

	gotoDetail(): void {
		this.router.navigate(['links/detail', this.selectedLink.id]);
	}
}
