import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Note } from '../../models/note';
import { Configuration } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class NoteService {

    private actionUrl: string;
    private headers: HttpHeaders;

    constructor(private http: HttpClient, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/notes/';

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    public getAll (): Observable<Note[]> {
        return this.http.get<Note[]>(this.actionUrl, { headers: this.headers });
    }
}
