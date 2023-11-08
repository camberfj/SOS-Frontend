import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(form: PoPageLogin){
    this.userName = form.login;
    this.password = form.password;
    console.log(form);
    this.authService.autorizar(this.userName, this.password).subscribe({
      complete: () => this.router.navigate(['home']),
      error: (err) => alert('Verifica tus datos')
    });
  }
}
