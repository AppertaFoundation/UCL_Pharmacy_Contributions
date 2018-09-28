import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase  from 'firebase';

/*
  Generated class for the UsersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersService {

  private data: any;
  public  fireAuth: any;
  public userProfile: any;

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('Users');
  }



signUpUser(email: string, password: string) {
  return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) =>{
    this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser)=> {
      this.userProfile.child(authenticatedUser.uid).set({email: email})

    });
  });

}

logInUser(email: string, password: string) {
  return this.fireAuth.signInWithEmailAndPassword(email, password);

}
logOutUser() {
  return this.fireAuth.signOut()
}

  forgotPassword(email: any) {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

}
