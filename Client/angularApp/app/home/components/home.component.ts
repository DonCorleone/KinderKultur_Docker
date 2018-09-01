import { Component } from '@angular/core';
import { ImageService } from '../../core/services/image.service';

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html'
})
export class HomeComponent {
	constructor(public imageService: ImageService) {}

	upload(files: File[]): void {
		this.imageService.upload(files);
	}
}
