import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//----IMPORTACIONES NECSARIAS PARA FIREBASE
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { AngularFirestore} from '@angular/fire/firestore';
import { from } from 'rxjs';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
