import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpEventType,
	HttpClient,
	HttpEvent,
	HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../../shared/utils/config.service';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class ImageService {
	_actionUrl: string;
	_staticUrl: string;

	public progress: number;
	public message: string;
	public imageToShow: any;

	constructor(
		private httpClient: HttpClient,
		private configuration: ConfigService
	) {
		this._actionUrl = configuration.getApiURI() + '/images/';
		this._staticUrl = configuration.getStaticURI() + '/images/';
	}

	public upload(files: File[], id: string) {
		if (files.length === 0) {
			return;
		}

		const formData = new FormData();

		for (const file of files) {
			formData.append('file', file);
		}

		formData.append('id', id);

		const uploadRequest = new HttpRequest('POST', this._actionUrl, formData, {
			reportProgress: true,
		});

		this.httpClient
			.request(uploadRequest)
			.subscribe(event => {
				if (event.type === HttpEventType.UploadProgress) {
					this.progress = Math.round((100 * event.loaded) / event.total);
				} else if (event.type === HttpEventType.Response) {
					this.message = event.body.toString();
					this.getImageFromService(event.body.toString());
				}
			});
	}
	getImageFromService(imageName: string) {
		this.imageToShow = this._staticUrl + imageName;
	}
}
