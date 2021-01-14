import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;

  constructor(private loginCheckService: LoginService) { }

  ngOnInit() {
    this.getServerLogin();
  }
  getServerLogin(){
    this.loginCheckService.getServerLogin().subscribe(
      (response:any) =>{
        this.result =response.message;
      },
      ()=>{}
    );
  }

}
