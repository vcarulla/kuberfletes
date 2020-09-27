import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  constructor(private storage: Storage) {}

    public email: string = '';

/*     ngOnInit() {
      const user: UserI = {
        email: 'victor@gmail.com',
        password: '1234444'
      }
      this.signIn(user.email, user.password)
    }

    email: string;
    password: string;
     
    signUp(email, password) {
      this.authenticationService.SignUp(email,password);
    }
     
    signIn(email, password) {
      this.authenticationService.SignIn(email, password);
    }
     
    signOut() {
      this.authenticationService.SignOut();
    } */
  
    goHome(value) {
      this.email = value;
      console.log(this.email)
    }

    getUserData() {
      this.storage.set('email', this.email);
    }
}
