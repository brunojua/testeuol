import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';

@Component({
	selector: 'app-busca',
	templateUrl: './busca.component.html',
	styleUrls: ['./busca.component.scss']
})

export class BuscaComponent implements OnInit {

	queryForm: any = { q: null };
	buscando: boolean = false;
	usuarios: any = [];

	constructor(
		private gitService: GithubService,
		// private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		// this.queryForm = this.formBuilder.group({
		// 	q: [null]
		// })
	}

	busca() {
		console.log(this.queryForm);

		this.buscando = true;
		
		this.gitService.buscaUsuarios(this.queryForm).subscribe(
			res => {
				this.buscando = false;
				this.usuarios = res;
				console.log(this.usuarios);				
			}, error => {
				this.buscando = false;
			}
		)
	}

}
