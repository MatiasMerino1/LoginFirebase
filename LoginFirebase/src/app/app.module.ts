import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule,
    ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"loginfirebase-6a3ef","appId":"1:406779091321:web:5a154a175917e872eab7a8","databaseURL":"https://loginfirebase-6a3ef-default-rtdb.firebaseio.com","storageBucket":"loginfirebase-6a3ef.appspot.com","apiKey":"AIzaSyBRJu9yxXBkJCV4q5UbdmuqNviGA4Sra1c","authDomain":"loginfirebase-6a3ef.firebaseapp.com","messagingSenderId":"406779091321","measurementId":"G-Q4HEHCJ6PY"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
