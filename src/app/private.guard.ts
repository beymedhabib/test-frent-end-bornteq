import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {
  constructor(private route: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token !== null) {
      this.route.navigateByUrl('/privatepage');
      return false;
    }
    else{
      return true;
    }
  }

}
