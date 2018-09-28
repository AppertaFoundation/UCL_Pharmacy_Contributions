import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../../pages/register/register';
import { UsersService } from '../../providers/users-service';
import { TabsPage } from '../../pages/tabs/tabs';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UsersService]
})

export class LoginPage {

public emailField: any;
public passwordField: any;
//this.projectService = new ProjectService(this.http);
  constructor(private alertCtrl: AlertController, private loadingCtril: LoadingController, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, 
  private usersService: UsersService) {
  }


  signUserUp() {
    this.usersService.signUpUser(this.emailField, this.passwordField).then(authData => {
      this.navCtrl.setRoot(TabsPage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  submitLogin() {

    this.usersService.logInUser(this.emailField, this.passwordField).then(authData => {
      
      this.navCtrl.setRoot(TabsPage);


    }, 
    error => {
          let alert = this.alertCtrl.create({
      title: 'Error Loggin in!',
      subTitle: 'Please create an account if you have not done so already',
      buttons: ['OK']
    });
    
    alert.present();
      
  });
  

  }

  submitRegister() {
   let registerModal = this.modalCtrl.create(RegisterPage);
   registerModal.present();

  }
  reset() {
    let prompt = this.alertCtrl.create({
      title: 'Enter your Email',
      message: "A new password will be sent to your email",
      inputs: [
        {name: 'RecoverEmail',
        placeholder: 'your@example.com'
      },
      ],
      buttons: [
        {text: 'Cancel',
      handler: data => {
        console.log('Cancel Clicked');
      }
    },

    {
      text: 'Reset Password',
      handler: data => {

        let loading = this.loadingCtril.create({
          dismissOnPageChange: true,
          content: 'Reseting your Password...'
        });
        loading.present();

        console.log("Clicked "+data.RecoverEmail);
        this.usersService.forgotPassword(data.RecoverEmail).then(()=> {
          loading.dismiss().then(()=> {
                            let alert = this.alertCtrl.create({
            title: 'Check your Email',
            subTitle: 'Password Reset Successful',
            buttons: ['OK']
          });
    
    alert.present();
             
          })
        }, error =>{
          loading.dismiss().then(()=> {
                let alert = this.alertCtrl.create({
            title: 'Error Reseting Password!',
            subTitle: error.message,
            buttons: ['OK']
          });
    
    alert.present();
    })

        });
      }
    }
      ]

    });
prompt.present();
  }




}
