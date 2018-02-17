import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { LinkService } from './../../core/services/link-data.service';
import { Link } from './../../models/link';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-links-editable-detail',
	templateUrl: './linksEditable-detail.component.html',
	styleUrls: ['./linksEditable-detail.component.scss']
})
export class LinksEditableDetailComponent implements OnInit {

	link: Link;

	constructor(
		private linkService: LinkService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.linkService.getSingle(params.get('id')))
			.subscribe(link => this.link = link);
	}

	save(): void {
		this.linkService.update(this.link.id, this.link);
		this.goBack();
	}

	goBack(): void {
		this.location.back();
	}
}
