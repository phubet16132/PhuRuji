import { Component, OnInit } from '@angular/core';
import { Password } from 'src/app/interface/Password';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  password: Password[] = [];

  constructor(private loginService: LoginService) {  }

  ngOnInit(): void {
  
  }


}
