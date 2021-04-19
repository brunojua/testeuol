import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  public baseUrl = 'https://api.github.com/';
  constructor(private http: HttpClient) { }

  _formatarParametros(params: any){
    return new URLSearchParams(params).toString();
  }

  getUsuario(usuario: string) {
    let req = this.http.get(this.baseUrl + 'users/' + usuario);
    req.pipe(
      map((data: any) => {
        console.log(data);        
      })
    )
    return req;

  }

  buscaUsuarios(params: any) {
    let url = this.baseUrl + 'search/users?';

    url += this._formatarParametros(params);

    let req = this.http.get(url.toString());
    req.pipe(
      map((data: any) => {
        console.log(data);    
      })
    )
    return req;

  }
}