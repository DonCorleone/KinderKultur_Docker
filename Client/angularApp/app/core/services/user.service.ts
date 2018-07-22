import { Injectable } from '@angular/core';

import { UserRegistration } from '../../models/user.registration.interface';
import { ConfigService } from '../../shared/utils/config.service';

import { BaseService } from './base.service';

import { Observable ,  BehaviorSubject } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { IUserLogin } from '../../models/user.login.interface';
import { UserLogin } from '../../models/user.login';

// Add the RxJS Observable operators we need in this app.
// import '../../rxjs-operators';

@Injectable()
export class UserService extends BaseService {

	baseUrl = '';

	// Observable navItem source
	private _authNavStatusSource = new BehaviorSubject<boolean>(false);
	// Observable navItem stream
	authNavStatus$ = this._authNavStatusSource.asObservable();

	private loggedIn = false;
	private headers: HttpHeaders;

	constructor(private http: HttpClient, private configService: ConfigService) {
		super();
		this.loggedIn = !!localStorage.getItem(UserLogin.AUTH_TOKEN);
		// ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
		// header component resulting in authed user nav links disappearing despite the fact user is still logged in
		this._authNavStatusSource.next(this.loggedIn);
		this.baseUrl = configService.getApiURI();
	}

	register(email: string, password: string, firstName: string, lastName: string, location: string): Observable<UserRegistration> {
		const body = JSON.stringify({ email, password, firstName, lastName, location });
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
			})
		};
		return this.http.post<UserRegistration>(this.baseUrl + '/accounts', body, httpOptions);
	}

	login(userName: string, password: string) {
		this.headers = new HttpHeaders();
		this.headers = this.headers.set('Content-Type', 'application/json');

		return this.http
			.post<IUserLogin>(
				this.baseUrl + '/auth/login',
				JSON.stringify({ userName, password }), { headers: this.headers }
			)
			.map(res => {
				localStorage.setItem(UserLogin.AUTH_TOKEN, res.auth_token);
				this.loggedIn = true;
				this._authNavStatusSource.next(true);
				return true;
			})
			.catch(this.handleError);
	}

	logout() {
		localStorage.removeItem(UserLogin.AUTH_TOKEN);
		this.loggedIn = false;
		this._authNavStatusSource.next(false);
	}

	isLoggedIn() {
		return this.loggedIn;
	}

	facebookLogin(accessToken: string) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
			})
		};
		const body = JSON.stringify({ accessToken });
		return this.http
			.post(
				this.baseUrl + '/externalauth/facebook', body, httpOptions)
			// ToDo Angular 4+
			.map(res => {
				localStorage.setItem(UserLogin.AUTH_TOKEN, res.toString());
				this.loggedIn = true;
				this._authNavStatusSource.next(true);
				return true;
			})
			.catch(this.handleError);
	}
}

