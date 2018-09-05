import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { LinkService } from './../../core/services/link-data.service';
import { Link } from './../../models/link';
import { ImageService } from '../../core/services/image.service';
import { ConfigService } from '../../shared/utils/config.service';



@Component({
	selector: 'app-links-editable-detail',
	templateUrl: './linksEditable-detail.component.html',
	styleUrls: ['./linksEditable-detail.component.scss']
})
export class LinksEditableDetailComponent implements OnInit {

	link: Link;
	errors: string;
	staticImageUri: string;

	constructor(
		private linkService: LinkService,
		private route: ActivatedRoute,
		private location: Location,
		private configService: ConfigService,
		public imageService: ImageService
	) {
		this.staticImageUri = configService.getStaticURI() + '/images/';
	}

	ngOnInit(): void {
		this.errors = '';
		this.route.paramMap
			.switchMap((params: ParamMap) => this.linkService.getSingle(params.get('id')))
			.subscribe(link => this.link = link, error => this.errors = error)
		;
	}

	save(): void {
		if (this.link === undefined) {
			this.errors = 'link undefined.';
		} else {
			this.linkService.update(this.link.id, this.link)
			.catch(errors => this.errors)
			.then(() => this.goBack());
		}
	}

	goBack(): void {
		this.location.back();
	}

	upload(files: File[]): void {
		this.imageService.upload(files, this.link);
	}
}
