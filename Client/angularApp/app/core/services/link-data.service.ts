import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

// import { Configuration } from './../../app.constants';
import { Link } from './../../models/link';
import { ConfigService } from '../../shared/utils/config.service';
import { UserLogin } from '../../models/user.login';

@Injectable()
export class LinkService {
	private actionUrl: string;
	private headers: HttpHeaders;

	constructor(
		private httpClient: HttpClient,
		private configuration: ConfigService
	) {
		this.actionUrl = configuration.getApiURI() + '/links/';

		this.headers = new HttpHeaders();
		this.headers = this.headers.set('Content-Type', 'application/json');
		this.headers = this.headers.set('Accept', 'application/json');
	}

	getAll(): Observable<Link[]> {
		return this.httpClient.get<Link[]>(this.actionUrl, {
			headers: this.headers
		});
	}

	getSingle(id: string): Observable<Link> {
		const authToken = localStorage.getItem(UserLogin.AUTH_TOKEN);
		this.headers = this.headers.set('Authorization', `Bearer ${authToken}`);

		return this.httpClient
			.get<Link>(this.actionUrl + id.toString(), { headers: this.headers })
			.catch(this.handleError);
	}

	create(linkToAdd: Link): Promise<Link> {
		const newLink = JSON.stringify({
			name: linkToAdd.name
		});
		const authToken = localStorage.getItem(UserLogin.AUTH_TOKEN);
		return this.httpClient
			.post(this.actionUrl, linkToAdd, {
				headers: this.headers.set('Authorization', `Bearer ${authToken}`)
			})
			.toPromise()
			.then(res => res as Link)
			.catch(this.handleError);
	}

	update(id: string, itemToUpdate: Link): Promise<Link> {
		const authToken = localStorage.getItem(UserLogin.AUTH_TOKEN);
		return this.httpClient
			.put<Link>(this.actionUrl + id, itemToUpdate, {
				headers: this.headers.set('Authorization', `Bearer ${authToken}`)
			})
			.toPromise()
			.then(() => itemToUpdate)
			.catch(this.handleError);
	}

	delete(id: string): Promise<void> {
		const authToken = localStorage.getItem(UserLogin.AUTH_TOKEN);
		return this.httpClient
			.delete(this.actionUrl + id, {
				headers: this.headers.set('Authorization', `Bearer ${authToken}`)
			})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
