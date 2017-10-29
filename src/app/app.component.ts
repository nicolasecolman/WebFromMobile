import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
declare var cordova: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //We don't need a root page because we use an external url
  //rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //Change this variable to use your website
      let url = 'http://example.com';
      cordova.InAppBrowser.open(url, "_self", "location=no");

    });
  }
}

