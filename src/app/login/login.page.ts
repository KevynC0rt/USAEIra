import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  constructor(
    private userService: AuthService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formLogin.value);
    this.userService.login(this.formLogin.value)
      .then(response => {
        this.router.navigate(['/home']);
          console.log(response);
        })
      .catch(error => console.log(error));
  }

}
