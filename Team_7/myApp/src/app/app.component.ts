import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  rootPage1 = LoginPage;

  constructor(platform: Platform) {

    var config = {
    apiKey: "AIzaSyDJE3guAphAjYwm8IhFbPIQwZfuBLVEOF8",
    authDomain: "myapptest-5291e.firebaseapp.com",
    databaseURL: "https://myapptest-5291e.firebaseio.com",
    storageBucket: "myapptest-5291e.appspot.com",
    messagingSenderId: "507986187434"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.rootPage = TabsPage;
    } else {

      this.rootPage1 = LoginPage;
    }
  });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
