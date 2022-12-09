import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the necessary AngularFire and AngularFireAuth modules
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule} from '@angular/fire/compat'

// Import the firebaseConfig object you added to the environment.ts file
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // x = environment.firebaseConfig.apiKey;
 }
