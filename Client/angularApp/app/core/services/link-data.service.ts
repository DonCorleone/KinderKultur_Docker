import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../app.constants';
import { Link } from './../../models/link';

@Injectable()
export class LinkService {

	private actionUrl: string;
	private headers: HttpHeaders;

	constructor(private http: HttpClient, private configuration: Configuration) {

		this.actionUrl = configuration.Server + 'api/links/';

		this.headers = new HttpHeaders();
		this.headers = this.headers.set('Content-Type', 'application/json');
		this.headers = this.headers.set('Accept', 'application/json');
	}

	getAll(): Observable<Link[]> {
		return this.http.get<Link[]>(this.actionUrl, { headers: this.headers });
	}

	getSingle(id: string): Observable<Link> {
		return this.http.get<Link>(this.actionUrl + id.toString(), { headers: this.headers });
	}

	add(linkToAdd: Link): Observable<Link> {
		const toAdd = JSON.stringify({ name: linkToAdd.name });

		return this.http.post<Link>(this.actionUrl, toAdd, { headers: this.headers });
	}

	update(id: string, itemToUpdate: Link): Promise<Link> {
		return this.http
			.put<Link>(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
			.toPromise()
			.then(() => itemToUpdate)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	delete(id: string): Observable<any> {
		return this.http.delete<any>(this.actionUrl + id.toString(), { headers: this.headers });
	}
}
