import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {HttpClientModule} from '@angular/common/http';
//import { Camera, CameraResultType, CameraSource, Photo , CameraOptions} from '@capacitor/camera';
//import { File } from '@ionic-native/file/ngx';
//import {SplashScreen} from '@ionic-native/splash-screen/ngx'
//import { StatusBar } from '@ionic-native/status-bar/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({mode:'ios'}),HttpClientModule, AppRoutingModule, FontAwesomeModule],
  providers:[{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
   ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}
