
import { StandingsService } from './common/service/standings.service';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { TeamsService } from './common/service/teams.service';
import { PlayersService } from './common/service/players.service';
import { FixturesService } from './common/service/fixtures.service';



@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StandingsService,
    FixturesService,
    TeamsService,
    PlayersService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
