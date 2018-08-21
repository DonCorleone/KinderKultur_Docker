import { Component, OnInit } from '@angular/core';
import {
	HttpClient,
	HttpRequest,
	HttpEventType,
	HttpResponse,
	HttpHeaders
} from '@angular/common/http';
import { ConfigService } from '../../shared/utils/config.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	public progress: number;
	public message: string;
	private actionUrl: string;
	private staticUrl: string;
	private headers: HttpHeaders;
	imgUrl = 'https://picsum.photos/200/300/?random';

	public imageToShow: any;
	isImageLoading: boolean;

	constructor(
		private httpClient: HttpClient,
		private configuration: ConfigService
	) {
		this.actionUrl = configuration.getApiURI() + '/images/';
		this.staticUrl = configuration.getStaticURI() + '/images/';

		this.headers = new HttpHeaders();
		this.headers = this.headers.set('Content-Type', 'application/json');
		this.headers = this.headers.set('Accept', 'application/json');
	}

	ngOnInit(): void {
		// this.imageToShow =
		// 	'https://localhost:5001/images/e47181c7-afbd-4ceb-a654-4a5a80657f66.jpg';
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

		// this.getImageFromService(this.message);
	}

	createImageFromBlob(image: Blob) {
		const reader = new FileReader();
		reader.addEventListener(
			'load',
			() => {
				this.imageToShow = reader.result;
			},
			false
		);

		if (image) {
			reader.readAsDataURL(image);
		}
	}

	getImageFromService(imageName: string) {
		this.imageToShow = this.staticUrl + imageName;
		// this.isImageLoading = true;
		// this.getImage(imageName).subscribe(
		// 	data => {
		// 		this.createImageFromBlob(data);
		// 		this.isImageLoading = false;
		// 	},
		// 	error => {
		// 		this.isImageLoading = false;
		// 		console.log(error);
		// 	}
		// );
	}

	getImage(imageName: string): Observable<Blob> {
		return this.httpClient.get(this.actionUrl + imageName, {
			responseType: 'blob'
		});
	}
}
