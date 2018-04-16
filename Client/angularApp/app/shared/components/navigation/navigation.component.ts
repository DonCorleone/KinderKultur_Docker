import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-navigation',
	templateUrl: 'navigation.component.html',
	styleUrls: ['navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {

	status: boolean;
	subscription: Subscription;


	ngOnInit(): void {
		this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
	}
	ngOnDestroy(): void {
		// prevent memory leak when component is destroyed
		this.subscription.unsubscribe();
	}
	constructor(private userService: UserService) { }

	logout() {
		this.userService.logout();
	}
}
