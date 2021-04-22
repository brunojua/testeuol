import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GithubService } from 'src/app/services/github.service';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient, private github: GithubService
	) { }

	autorizar() {
		let cid = environment.GITHUB_CLIENT_ID;
		window.location.href = `https://github.com/login/oauth/authorize?client_id=${cid}`;
	}

	authenticate(code: string) {

		this.logout();

		var params = { code: code, client_id: environment.GITHUB_CLIENT_ID, client_secret: environment.GITHUB_CLIENT_SECRET };

		let headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		};

		let req = this.http.post<any>('/github_auth/login/oauth/access_token', params, {
			headers: new HttpHeaders(headers)
		}).pipe(
			map((data: any) => {
				console.log(data);
				localStorage.setItem('_token', data.access_token);
			})
		);

		return req;
	}

	logout() {
		localStorage.removeItem('_token');
	}

	isAuthenticated(): boolean {
		return !!this.getToken();
	}

	getToken() {
		return localStorage.getItem('_token');
	}
}
