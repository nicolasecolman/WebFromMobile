import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';
declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, public loadingCtrl: LoadingController) {

  	//Change this variable to use your website
  	let url = 'https://nicolasecolman.github.io/';

  	this.platform.ready().then(() => {
  	    let loader = this.loadingCtrl.create({
	    	content: "Please wait...",
	    	duration: 3000
	    });
	    loader.present();

        cordova.InAppBrowser.open(url, "_self", "location=true");
    });	
  }

}
