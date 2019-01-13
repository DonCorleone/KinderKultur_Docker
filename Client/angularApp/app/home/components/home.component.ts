import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { ConfigService } from '../../shared/utils/config.service';

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	private _hubConnection: HubConnection | undefined;
	public async: any;
	message = '';
	messages: string[] = [];

	constructor(
		private configService: ConfigService) {
	}

	public sendMessage(): void {
		const data = `${this.message}`;

		if (this._hubConnection) {

			this._hubConnection.invoke('Send', data);
			// this.messages.push(data);
		}
	}

	ngOnInit(): void {
		this._hubConnection = new signalR.HubConnectionBuilder()
			.withUrl(this.configService._staticURI + 'loopy')
			.configureLogging(signalR.LogLevel.Information)
			.build();

		this._hubConnection.start().catch(err => console.error(err.toString()));

		this._hubConnection.on('Send', (data: any) => {
			const received = `${data}`;
			this.messages.push(received);
		});
	}
}
