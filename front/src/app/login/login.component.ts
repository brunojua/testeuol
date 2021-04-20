import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {

    this.activeRoute.queryParams.subscribe(queryParams => {

      if (queryParams && queryParams.code) {
        
        this.auth.authenticate(queryParams.code).subscribe(
          res => {
            console.log('OK', res);
            this.router.navigate(['/github']);
          },
          err => {
            console.log('ERR', err);
            this.router.navigate(['/login']);
          }
        )
        // .then((data) => {
        //   console.log(data)
        // }).catch(err => console.log(err));
      }
    });

  }

  login() {
    this.auth.autorizar();
  }
}