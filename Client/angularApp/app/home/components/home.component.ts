import { Component } from '@angular/core';
import {
	HttpClient,
	HttpRequest,
	HttpEventType,
	HttpResponse,
	HttpHeaders
} from '@angular/common/http';
import { ConfigService } from '../../shared/utils/config.service';

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html'
})
export class HomeComponent {
	public progress: number;
	public message: string;
	private actionUrl: string;
	private headers: HttpHeaders;

	constructor(
		private httpClient: HttpClient,
		private configuration: ConfigService
	) {
		this.actionUrl = configuration.getApiURI() + '/images/';

		this.headers = new HttpHeaders();
		this.headers = this.headers.set('Content-Type', 'application/json');
		this.headers = this.headers.set('Accept', 'application/json');
	}
	upload(files: File[]): void {
		if (files.length === 0) {
			return;
		}

		const formData = new FormData();

		for (const file of files) {
			formData.append('file', file);
		}

		const uploadRequest = new HttpRequest('POST', this.actionUrl, formData, {
			reportProgress: true
      });

      this.httpClient.request(uploadRequest).subscribe(event => {
         if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
         } else if (event.type === HttpEventType.Response) {
            this.message = event.body.toString();
         }
      });
	}
}
