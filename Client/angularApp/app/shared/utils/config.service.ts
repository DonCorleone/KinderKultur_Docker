import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

	_apiURI: string;
	_staticURI: string;

	constructor() {
		this._apiURI = 'https://localhost:5001/api/v1';
		this._staticURI = 'https://localhost:5001/';
	}

	getApiURI() {
		return this._apiURI;
	}

	getStaticURI() {
		return this._staticURI;
	}
}
