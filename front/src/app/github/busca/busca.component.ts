import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';

@Component({
	selector: 'app-busca',
	templateUrl: './busca.component.html',
	styleUrls: ['./busca.component.scss']
})

export class BuscaComponent implements OnInit {

	// queryForm: any = { q: null };
	// usuarios: any = [];

	query: any = '';
	usuario: any;
	buscando: boolean = false;
	mostrarErro: boolean = false;
	msgErro: string;
	
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
		console.log(this.query);

		this.buscando = true;
		
		this.gitService.getUsuario(this.query).subscribe(
			res => {
				console.log(this.usuario);
				this.buscando = false;
				this.usuario = res;
			}, error => {
				console.log(error);
				this.buscando = false;
				this.usuario = null;
				this.mostrarErro = true;
				this.msgErro = error.error.message || 'Aconteceu um erro, Tente novamente!';
			}
		)

		// this.gitService.buscaUsuarios(this.queryForm).subscribe(
		// 	res => {
		// 		this.buscando = false;
		// 		this.usuarios = res;
		// 		console.log(this.usuarios);				
		// 	}, error => {
		// 		this.buscando = false;
		// 	}
		// )
	}

}
