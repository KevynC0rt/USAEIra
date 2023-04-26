import { Component, OnInit } from '@angular/core';
import User from 'src/app/interfaces/user.interface';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent  implements OnInit {

  users: User[];

  constructor(
    private registerService: RegisterService
  ) {
    this.users = [{
        nombre: '1',
        email: '1',
        password: '1',
        confirmPassword: '1',
    }];
  }

  ngOnInit(): void {
    this.registerService.getPlaces().subscribe(users => {
      this.users = users;
    })
  }

  async onClickDelete(users: User) {
    const response = await this.registerService.deletePlace(users);
    console.log(response);
  }

}
