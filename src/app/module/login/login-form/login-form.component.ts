import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from 'src/app/interface/Password';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() onLogin: EventEmitter<Password> = new EventEmitter();
  password!: string;
  passwords: Password[] = []
  isWrong: boolean = false

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getPassword().subscribe(password => this.passwords = password)
  }

  onSubmit(){
    if(!this.password){
      alert('Please add a password')
      return
    }

    const isLogin = this.passwords.some((t) => (t.id === 1 && t.password === this.password))

    if(isLogin){
      this.router.navigate(['/home'])
    }
    else{
      this.isWrong = true
    }
    

    this.password = "";
  }
}
