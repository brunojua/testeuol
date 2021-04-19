import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { BuscaComponent } from './busca/busca.component';
import { PerfilComponent } from './perfil/perfil.component';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GithubComponent, BuscaComponent, PerfilComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
    // ReactiveFormsModule,
    // FormControl,
    FormsModule
  ]
})
export class GithubModule { }
