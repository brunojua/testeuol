import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'app';
	route: String;

	constructor(private location: Location, private router: Router, private auth: AuthService, private activatedRouter: ActivatedRoute) {
		
		this.router.events.subscribe((ev) => {

			if (ev instanceof NavigationEnd) {
				console.log(this.location.path())

				if (this.location.path() == '' || this.location.path() == '/') {
					if (this.auth.isAuthenticated()) {
						this.router.navigate(['github'])
					} else {
						this.router.navigate(['login'])
					}
				}

			}

		});

	}

	ngOnInit(): void {
	}
}