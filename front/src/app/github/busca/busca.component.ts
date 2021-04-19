import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  constructor(
    private gitService: GithubService
  ) { }

  ngOnInit(): void {
  }

  busca() {
    this.gitService.buscaUsuarios({q: 'bruno'}).subscribe(
      res => {

      }, error => {
        
      }
    )
  }

}
