import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  loading: Boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.initializeApp();
    this.initializeLoader();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeLoader(){
    this.router.events.subscribe( event => {
      switch(true)
      {
        case event instanceof NavigationStart:{
          this.presentLoading(200);
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
        {
          this.dismissLoading();
          break;
        }
        default:{
          break;
        }
      }
    });
  }

  async presentLoading(delay: number) {
    this.loading = true;

    let presentLoadingArrow = async () => {
      const loading = await this.loadingController.create({
        message: 'Loading ...',
        duration: 20000,
        translucent: true,
        showBackdrop: false
      });
      await loading.present().then(() => console.log("loading presented"));;
  
      if(!this.loading){
        await loading.dismiss();
      }
      else{
        loading.onDidDismiss().then(() => console.log("loading dismissed"))
      }
    };

    if(delay > 0){
      window.setTimeout(() => {
        if(this.loading){
          presentLoadingArrow();
        }
      }, delay);
    }
    else{
      presentLoadingArrow();
    }
  }

  async dismissLoading() {
    this.loading = false;
    await this.loadingController.dismiss().then(() => console.log("loading dismissed"));
  }
}
