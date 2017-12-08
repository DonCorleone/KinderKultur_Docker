import { Component, OnInit } from '@angular/core';
import { NoteService } from './../../core/services/note-data.service';
import { Note } from './../../models/note';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes.component.html',
})

export class NotesComponent implements OnInit {

    public notes: Note[];

    constructor(private dataService: NoteService) {
    }

    ngOnInit() {
        this.dataService
            .getAll()
            .subscribe(
            data => this.notes = data,
            error => console.log(error),
            () => console.log('Get all complete')
            );
    }
}
