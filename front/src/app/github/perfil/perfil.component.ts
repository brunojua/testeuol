import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

	nomeUsuario: any;
	usuario: any;
	repos: any;
	starreds: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private gitService: GithubService,
	) {
		this.activatedRoute.params.subscribe(
			res => {
				console.log(res);
				this.nomeUsuario = res;
			}
		);
		
	}

	ngOnInit(): void {
		this.getUsuario();
		this.getRepos();
		this.getStarred();
	}

	goBack() {
		window.history.back();
	}

	getUsuario() {		
		this.gitService.getUsuario(this.nomeUsuario.user).subscribe(
			res => {				
				this.usuario = res;				
			}, error => {				
				
			}
		);		
	}

	getRepos() {		
		this.gitService.getRepos(this.nomeUsuario.user).subscribe(
			res => {				
				this.repos = res;
			}, error => {
				
			}
		);
	}

	getStarred() {		
		this.gitService.getStarred(this.nomeUsuario.user).subscribe(
			res => {			
				this.starreds = res;
			}, error => {

			}
		);
	}

}
