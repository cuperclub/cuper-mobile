import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {}
  loading: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginForm(){
    console.log(this.user);
    this.router.navigate(['/home']);
  }

}
