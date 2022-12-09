import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login() {
    console.log('login');
    this.isLoading = true;
    // Get the email and password from the form
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    // Use the AngularFireAuth service to sign in the user with the given email and password
    await this.afAuth.createUserWithEmailAndPassword(email.value, password.value)
      .catch(error => {
        // If there is an error, display a message to the user
        this.isLoading = false;
        console.error(error);
        alert(error.message);
      }).then(() => this.isLoading = false);
  }

}
