import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyCMrfcO56dq8KyM_ZQIMuRO_pup_qFwgkY",
      authDomain: "fir-angular-auth-cbc2d.firebaseapp.com",
      projectId: "fir-angular-auth-cbc2d",
      storageBucket: "fir-angular-auth-cbc2d.appspot.com",
      messagingSenderId: "517709556825",
      appId: "1:517709556825:web:6fd01f95c5d28a9d725548"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
