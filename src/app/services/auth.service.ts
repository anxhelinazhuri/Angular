import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // tslint:disable-next-line:typedef
  authUser(user: any){
    let UserArray = [];
    if (localStorage.getItem('Users')){
      UserArray.push(JSON.parse(localStorage.getItem('Users')));

    }
    return UserArray.find(p => p.userName === user.userName && p.password === user.password );
  }
}
