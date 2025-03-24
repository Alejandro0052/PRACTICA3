import { Component } from '@angular/core';
import { CardusersComponent } from '../../components/cardusers/cardusers.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  imports: [CardusersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {
  items = [0,0,0,0];
  option = true;
  num1 = 5;
  num2 = 10;
  users:any;

  constructor(
    private usersService: UsersService
  ){   
  }

  ngOnInit(){
    this.cargaUsers();
  }

  async cargaUsers(){
    this.users = await this.usersService.getUsers();
    console.log(this.users);
  }
}