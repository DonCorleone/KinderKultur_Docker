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

	addLink(): void {
		this.router.navigate(['links/add']);
	}

	deleteLink(link: Link): void {
		this.linkService
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
		this.linkService
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
