import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { LinkService } from './../../core/services/link-data.service';
import { Link } from './../../models/link';



@Component({
	selector: 'app-links-editable-add',
	templateUrl: './linksEditable-detail.component.html',
	styleUrls: ['./linksEditable-detail.component.scss']
})
export class LinksEditableAddComponent implements OnInit {

	link: Link;
	errors: String;

	constructor(
		private linkService: LinkService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.link = new Link();
	}

	save(): void {
		this.linkService.create(this.link)
		.catch(errors => this.errors)
		.then(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}
}
