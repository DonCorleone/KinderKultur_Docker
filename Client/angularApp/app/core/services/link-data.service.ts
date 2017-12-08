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

    getSingle(id: number): Observable<Link> {
        return this.http.get<Link>(this.actionUrl + id, { headers: this.headers });
    }

    add(linkToAdd: Link): Observable<Link> {
        const toAdd = JSON.stringify({ name: linkToAdd.name });

        return this.http.post<Link>(this.actionUrl, toAdd, { headers: this.headers });
    }

    update(id: number, itemToUpdate: any): Observable<Link> {
        return this.http
            .put<Link>(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.actionUrl + id, { headers: this.headers });
    }
}
