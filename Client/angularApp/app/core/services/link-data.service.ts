import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../app.constants';
import { Link } from './../../models/link';

@Injectable()
export class LinkService {

	private actionUrl: string;
	private headers: HttpHeaders;

	constructor(private httpClient: HttpClient, private configuration: Configuration) {

		this.actionUrl = configuration.Server + 'api/links/';

		this.headers = new HttpHeaders();
		this.headers = this.headers.set('Content-Type', 'application/json');
		this.headers = this.headers.set('Accept', 'application/json');
	}

	getAll(): Observable<Link[]> {
		return this.httpClient.get<Link[]>(this.actionUrl, { headers: this.headers });
	}

	getSingle(id: string): Observable<Link> {
		return this.httpClient.get<Link>(this.actionUrl + id.toString(), { headers: this.headers });
	}

	create(linkToAdd: Link): Promise<Link> {
		const newLink = JSON.stringify({
			name: linkToAdd.name
		});
		return this.httpClient
			.post(this.actionUrl, linkToAdd,
			// 	JSON.stringify({
			// 	name: linkToAdd.name
			// }) + JSON.stringify({
			// 	desc: linkToAdd.desc
			// }) + JSON.stringify({
			// 	url: linkToAdd.url
			// }) + JSON.stringify({
			// 	urldesc: linkToAdd.urldesc
			// }),
			{ headers: this.headers })
			.toPromise()
			.then(res => res as Link)
			.catch(this.handleError);
	}

	add(linkToAdd: Link): Observable<Link> {
		const toAdd = JSON.stringify({ name: linkToAdd.name });

		return this.httpClient.post<Link>(this.actionUrl, toAdd, { headers: this.headers });
	}

	update(id: string, itemToUpdate: Link): Promise<Link> {
		return this.httpClient
			.put<Link>(this.actionUrl + id, itemToUpdate, { headers: this.headers })
			.toPromise()
			.then(() => itemToUpdate)
			.catch(this.handleError);
	}

	handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	delete(id: string): Promise<void> {
		return this.httpClient.delete(this.actionUrl + id, { headers: this.headers })
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}
}
