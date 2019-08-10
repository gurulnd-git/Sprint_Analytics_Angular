import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private heroService : HeroService) { }

  ngOnInit() {
  }
  loginSuccess(){
    this.heroService.loginSuccess();
  }

}
