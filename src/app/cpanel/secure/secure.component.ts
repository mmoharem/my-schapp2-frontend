import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../shared/services/token.service';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user;
  url = 'http://127.0.0.1:8000/user';

  constructor(private httpServ: HttpService,
              private tokenServ: TokenService,
              private router: Router) { }

  ngOnInit() {

    const header: HttpHeaders = this.tokenServ.Header;

    this.httpServ.isLoggedIn();

    this.httpServ.adminRedirect(header).subscribe(
      result => {
        this.user = result;
      },
      errror => {
        this.tokenServ.removeToken();
        this.router.navigate(['/login']);
      }
    );
  }

}
