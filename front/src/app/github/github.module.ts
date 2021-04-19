import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { BuscaComponent } from './busca/busca.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [GithubComponent, BuscaComponent, PerfilComponent],
  imports: [
    CommonModule,
    GithubRoutingModule
  ]
})
export class GithubModule { }
