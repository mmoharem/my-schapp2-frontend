import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../shared/services/http.service';
import { TokenService } from '../../shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // private form:FormGroup;
  form:FormGroup;
  error = [];

  constructor(private formB: FormBuilder,
              private httpServ: HttpService,
              private tokenServ: TokenService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.formB.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });
  }

  // private submit() {
  submit() {
    const data = this.form.getRawValue();

    this.httpServ.signUp(data).subscribe(
      result => this.handleResponse(result),
      error => this.handleError(error)
    );
    // console.log(data);
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  handleResponse(result) {
    console.log(result);
    this.tokenServ.setTokrn(result.access_token);
    this.router.navigate(['/secure']);
    this.httpServ.isLoggedIn();
  }

}
