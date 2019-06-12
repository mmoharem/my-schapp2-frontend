import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/services/http.service';
import { TokenService } from '../../shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error;

  constructor(private formB: FormBuilder,
              private httpServ: HttpService,
              private tokenServ: TokenService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.formB.group({
      email: '',
      password: ''
    });
  }

  submit() {
    const formData = this.form.getRawValue();

     const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'nBhhkmXZgSJxZ1gXa6N22JI70wWKNX6ec3QdhytN',
      scope: '*'
    }

    this.httpServ.signIn(data).subscribe(
      // this.handleError(data)
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
    // console.log(error)
  }

  handleResponse(data) {
    // const header =
    this.tokenServ.setTokrn(data.access_token);
    this.router.navigate(['/secure']);
    this.httpServ.isLoggedIn();
  }

}
