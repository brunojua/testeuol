import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { GithubComponent } from './github.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  { 
    path: '', component: GithubComponent,
    children: [
      { path: 'busca', component: BuscaComponent },
      { path: 'perfil', component: PerfilComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
