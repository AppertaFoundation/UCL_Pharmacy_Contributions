import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  contributions: FirebaseListObservable<any>

  constructor(public navCtrl: NavController, public af: AngularFire) {
  	this.contributions = af.database.list('/contributions')
  }

}
