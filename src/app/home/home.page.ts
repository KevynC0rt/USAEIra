import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private userService: AuthService,
    private router:Router
  ) {}
  ngOnInit() {
  }

  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login'])
  })
  .catch(error => console.log(error));
  }
}
