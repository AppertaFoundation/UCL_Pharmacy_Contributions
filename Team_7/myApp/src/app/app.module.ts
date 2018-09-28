import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContributionPage } from '../pages/contribution/contribution';
import { Data } from '../providers/data';
import { AngularFireModule } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

const config = {
    apiKey: "AIzaSyDJE3guAphAjYwm8IhFbPIQwZfuBLVEOF8",
    authDomain: "myapptest-5291e.firebaseapp.com",
    databaseURL: "https://myapptest-5291e.firebaseio.com",
    storageBucket: "myapptest-5291e.appspot.com",
    messagingSenderId: "507986187434"
  };

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ContributionPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ContributionPage,
    LoginPage,
    RegisterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
