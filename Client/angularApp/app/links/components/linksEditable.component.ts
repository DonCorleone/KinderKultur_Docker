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
		private linkService: LinkService) { }

	ngOnInit() {
		this.getAllLinks();
	}

	deleteLink(link: Link): void {
		this.linkService
			.delete(link.id) // Promise
			.then(() => {
				this.links = this.links.filter(h => h !== link);
				if (this.selectedLink === link) { this.selectedLink = null; }
			})
			.catch(error => this.message = error); // Promise catch
	}

	getAllLinks() {
		this.linkService
			.getAll() // Observable
			.subscribe(
				data => this.links = data,
				error => this.message = error, // Observable catch
				() => console.log('Get all complete')
			);
	}

	onSelect(link: Link): void {

		this.selectedLink = link;
		this.gotoDetail();
	}

	gotoDetail(): void {
		this.router.navigate(['links/detail', this.selectedLink.id]);
	}

	addLink(): void {
		this.router.navigate(['links/add']);
	}
}
