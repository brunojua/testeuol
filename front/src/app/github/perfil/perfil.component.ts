import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

	constructor(
		private activatedRoute: ActivatedRoute,
		private gitService: GithubService,
	) {
		this.activatedRoute.params.subscribe(
			res => {
				console.log(res);
			}
		);
		
	}

	ngOnInit(): void {
	}

	goBack() {
		window.history.back();
	}

}
