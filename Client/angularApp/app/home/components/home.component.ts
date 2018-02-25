import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

	public message: string;

	constructor() {
		this.message = 'kinderkultur.ch 2.0';
	}

	ngOnInit() {
	}
}
