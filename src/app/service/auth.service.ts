import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router, ROUTES } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }
  Register(data) {
   const users = JSON.parse( localStorage.getItem('users')) || [];
   // tslint:disable-next-line: prefer-for-of
   for (let i = 0; i < users.length; i++) {
     if (data.email === users[i].email) {
       alert('email in use');
       return false;
     } else {
       users.push(data);
       localStorage.setItem('users', JSON.stringify(users) );
       this.route.navigateByUrl('/login');
     }
   }
  }
  Login(data) {
    const loged = JSON.parse( localStorage.getItem('loged')) || {};
    const users = JSON.parse( localStorage.getItem('users')) || [];
    users.map((user) => {
      if (user.password === data.password && user.email === data.email) {
        localStorage.setItem('token', JSON.stringify(data.email));
        this.route.navigateByUrl('/privatepage');
      }
    });
  }
  Logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login')
  }
}
